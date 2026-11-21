"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Início", id: "inicio" },
  { label: "Skills", id: "skills" },
  { label: "Formação", id: "formacao" },
  { label: "Projetos", id: "projetos" },
  { label: "Hobbies", id: "hobbies" },
  { label: "Contato", id: "contato" },
];

export function Header() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4] },
    );
    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101714]/85">
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="font-display text-lg font-bold tracking-tight text-ink dark:text-white"
          aria-label="Voltar ao início"
        >
          SN<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm transition-colors hover:text-accent ${
                active === link.id
                  ? "font-semibold text-accent"
                  : "text-muted dark:text-white/65"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-button"
            aria-label="Alternar tema claro ou escuro"
          >
            <Moon size={18} className="dark:hidden" />
            <Sun size={18} className="hidden dark:block" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-button lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-ink/5 bg-canvas px-5 py-4 dark:border-white/10 dark:bg-[#101714] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-sm ${
                  active === link.id
                    ? "bg-accent/10 font-semibold text-accent"
                    : "text-muted dark:text-white/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

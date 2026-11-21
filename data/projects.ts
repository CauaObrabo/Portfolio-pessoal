import { BarChart3, Compass, ShoppingBag, type LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demo: string;
  repository: string;
  icon: LucideIcon;
  theme: string;
  label: string;
};

export const projects: Project[] = [
  {
    title: "Lumina Store",
    description:
      "Uma experiência de compra intuitiva, com catálogo organizado e foco em uma navegação sem atrito.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/lumina.svg",
    demo: "https://example.com",
    repository: "https://github.com/",
    icon: ShoppingBag,
    theme: "from-[#f2cdbd] to-[#f8eadd]",
    label: "E-COMMERCE",
  },
  {
    title: "Finanças em foco",
    description:
      "Dashboard pessoal para acompanhar gastos, visualizar hábitos e planejar metas financeiras.",
    technologies: ["React", "TypeScript", "Charts"],
    image: "/projects/financeiro.svg",
    demo: "https://example.com",
    repository: "https://github.com/",
    icon: BarChart3,
    theme: "from-[#bfd5c8] to-[#e6eee6]",
    label: "DASHBOARD",
  },
  {
    title: "Rota local",
    description:
      "Guia de lugares especiais da cidade, feito para descobrir novos cafés e salvar favoritos.",
    technologies: ["Next.js", "API", "CSS"],
    image: "/projects/rota.svg",
    demo: "https://example.com",
    repository: "https://github.com/",
    icon: Compass,
    theme: "from-[#d0c8e5] to-[#eeeaf5]",
    label: "EXPLORAÇÃO",
  },
];

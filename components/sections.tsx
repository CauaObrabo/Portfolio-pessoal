"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { certificates } from "@/data/certificates";
import { education } from "@/data/education";
import { hobbies } from "@/data/hobbies";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/reveal";

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-muted dark:text-white/60">{description}</p>
    </Reveal>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[760px] scroll-mt-24 items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-[850px]"
    >
      <div className="pointer-events-none absolute -right-36 top-20 h-[520px] w-[520px] rounded-full bg-[#dce9df] blur-3xl dark:bg-accent/10" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#f2e7d8] blur-3xl dark:bg-[#8d6b4c]/10" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/70 px-4 py-2 text-sm text-accent shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-[#a9d2c2]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponível para novos projetos
          </div>
          <p className="mb-2 text-lg text-muted dark:text-white/60">Olá, eu sou</p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-accent sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted dark:text-white/65 sm:text-lg">
            {profile.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="button-primary">
              Ver projetos <ArrowDownRight size={17} />
            </a>
            <a href="#contato" className="button-secondary">
              Entrar em contato <ArrowRight size={17} />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <span className="mr-1 text-xs font-medium uppercase tracking-[0.16em] text-muted dark:text-white/45">
              Me acompanhe
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub (abre em nova aba)">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn (abre em nova aba)">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[410px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 rotate-[-5deg] rounded-[2.5rem] border border-accent/10" />
          <div className="relative flex aspect-[0.88] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dce9df] via-[#f2eee4] to-[#ead9ca] dark:from-[#294238] dark:via-[#26332e] dark:to-[#44392e]">
            <div className="absolute inset-5 rounded-[1.5rem] border border-white/60 dark:border-white/10" />
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-[10px] border-white/60 bg-white/50 font-display text-5xl font-semibold tracking-tight text-accent shadow-soft dark:border-white/10 dark:bg-white/10 dark:text-[#b4d7c8]">
              SN
            </div>
            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft backdrop-blur dark:border-white/10 dark:bg-[#17211c]/80">
              <div className="flex items-center gap-2 text-sm font-medium text-ink dark:text-white">
                <Sparkles size={16} className="text-accent" />
                Criando com propósito
              </div>
            </div>
            <div className="absolute right-8 top-8 rounded-full bg-white/80 p-3 text-accent shadow-soft dark:bg-[#17211c]/80">
              <span aria-hidden="true" className="font-mono text-lg font-bold">&lt;/&gt;</span>
            </div>
          </div>
          <a
            href="#skills"
            className="absolute -bottom-9 right-2 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-ink/5 bg-white text-ink shadow-soft transition-transform hover:translate-y-1 dark:border-white/10 dark:bg-[#1b2620] dark:text-white"
            aria-label="Rolar para minhas habilidades"
          >
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-wrap scroll-mt-24">
      <SectionTitle
        eyebrow="O que eu faço"
        title="Ferramentas para boas ideias."
        description="Tecnologias e práticas que uso para transformar desafios em produtos digitais rápidos, acessíveis e agradáveis de usar."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => {
          const GroupIcon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 0.07}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-2xl border border-ink/[0.07] bg-white p-5 shadow-sm transition-shadow hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-xl bg-accent/10 p-2.5 text-accent dark:bg-accent/20 dark:text-[#a9d2c2]">
                    <GroupIcon size={19} />
                  </span>
                  <h3 className="font-display font-semibold text-ink dark:text-white">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between gap-2 text-sm">
                          <span className="flex items-center gap-2 text-ink dark:text-white/85">
                            <SkillIcon size={15} className="text-muted dark:text-white/45" />
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted dark:text-white/45">{skill.level}%</span>
                        </div>
                        <div
                          className="h-1.5 overflow-hidden rounded-full bg-ink/[0.06] dark:bg-white/10"
                          role="progressbar"
                          aria-label={`Proficiência em ${skill.name}`}
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <motion.div
                            className="h-full rounded-full bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="formacao" className="section-wrap scroll-mt-24">
      <SectionTitle
        eyebrow="Minha jornada"
        title="Formação & certificados."
        description="Aprendizado contínuo, curiosidade e prática são parte essencial de como evoluo como profissional."
      />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="mb-7 font-display text-xl font-semibold text-ink dark:text-white">Formação acadêmica</h3>
          <div className="relative space-y-6 before:absolute before:bottom-7 before:left-[19px] before:top-5 before:w-px before:bg-accent/20">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.course} delay={index * 0.08} className="relative flex gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-canvas text-accent dark:bg-[#101714] dark:text-[#a9d2c2]">
                    <Icon size={17} />
                  </div>
                  <article className="flex-1 rounded-2xl border border-ink/[0.07] bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.period}</p>
                    <h4 className="mt-2 font-semibold text-ink dark:text-white">{item.course}</h4>
                    <p className="mt-1 text-sm text-muted dark:text-white/55">{item.institution}</p>
                    <p className="mt-3 text-sm leading-6 text-muted dark:text-white/60">{item.detail}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="mb-7 font-display text-xl font-semibold text-ink dark:text-white">Certificações</h3>
          <div className="space-y-4">
            {certificates.map((certificate, index) => {
              const Icon = certificate.icon;
              return (
                <Reveal key={certificate.name} delay={index * 0.08}>
                  <a
                    href={certificate.href}
                    className="group flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04]"
                    aria-label={`${certificate.name}, ${certificate.issuer}, ${certificate.year}`}
                  >
                    <span className="rounded-xl bg-[#f2eee4] p-3 text-accent dark:bg-white/10 dark:text-[#a9d2c2]">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink dark:text-white">{certificate.name}</span>
                      <span className="mt-1 block text-sm text-muted dark:text-white/55">
                        {certificate.issuer} · {certificate.year}
                      </span>
                    </span>
                    <ArrowUpRight size={17} className="text-muted transition-colors group-hover:text-accent dark:text-white/40" />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="section-wrap scroll-mt-24">
      <SectionTitle
        eyebrow="Feito com intenção"
        title="Projetos selecionados."
        description="Uma pequena seleção de projetos pessoais e estudos. Cada um é uma oportunidade de experimentar, aprender e resolver um problema real."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.5rem] border border-ink/[0.07] bg-white shadow-sm transition-shadow hover:shadow-soft dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="relative aspect-[1.48] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Prévia visual do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white/75 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-ink/70 backdrop-blur">
                    {project.label}
                  </div>
                  <div className="absolute bottom-4 right-5 rounded-full bg-white/75 p-2.5 text-ink shadow-sm backdrop-blur">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-white">{project.title}</h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted dark:text-white/60">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-canvas px-3 py-1 text-xs text-muted dark:bg-white/10 dark:text-white/65">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-5 border-t border-ink/[0.07] pt-4 dark:border-white/10">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline dark:text-[#a9d2c2]">
                      Ver projeto <ArrowUpRight size={15} />
                    </a>
                    <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink dark:text-white/55 dark:hover:text-white" aria-label={`Repositório de ${project.title} (abre em nova aba)`}>
                      <Github size={15} /> Código
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Hobbies() {
  return (
    <section id="hobbies" className="section-wrap scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <SectionTitle
          eyebrow="Além da tela"
          title="Um pouco de vida fora do código."
          description="Essas pequenas pausas me ajudam a voltar com novas referências, energia e outras perspectivas."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <Reveal key={hobby.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-ink/[0.07] bg-white p-4 sm:p-5 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <span className="mb-4 inline-flex rounded-xl bg-accent/10 p-2.5 text-accent dark:bg-accent/20 dark:text-[#a9d2c2]">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-display font-semibold text-ink dark:text-white">{hobby.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted dark:text-white/55">{hobby.description}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label, value }: { href: string; icon: ReactNode; label: string; value: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="contact-link">
      <span className="contact-icon">{icon}</span>
      <span><span className="contact-label">{label}</span><span className="contact-value">{value}</span></span>
      <ArrowUpRight size={17} className="ml-auto text-muted" />
    </a>
  );
}

export function Contact() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const message = String(formData.get("message"));
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFeedback("Seu aplicativo de email deve abrir com a mensagem pronta.");
    form.reset();
  }

  return (
    <>
      <section id="contato" className="scroll-mt-24 bg-[#edf2ed] px-5 py-24 dark:bg-[#17211c] sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionTitle
              eyebrow="Vamos conversar"
              title="Tem uma ideia? Vamos tirar do papel."
              description="Estou aberto a novos desafios, projetos e boas conversas. Me conte um pouco do que você tem em mente."
            />
            <div className="space-y-4">
              <ContactLink href={`mailto:${profile.email}`} icon={<Mail size={19} />} label="Email" value={profile.email} />
              <ContactLink href={`https://wa.me/${profile.phone}`} icon={<Send size={19} />} label="WhatsApp" value="Vamos conversar por mensagem" />
              <ContactLink href={profile.linkedin} icon={<Linkedin size={19} />} label="LinkedIn" value="Conecte-se comigo" />
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm text-muted dark:text-white/55">
              <MapPin size={16} /> {profile.location}
            </p>
          </div>
          <Reveal>
            <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-ink/[0.06] bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">Envie uma mensagem</h3>
              <p className="mt-2 text-sm text-muted dark:text-white/55">Responderei assim que possível.</p>
              <div className="mt-7 space-y-5">
                <label className="form-label">
                  Seu nome
                  <input name="name" type="text" autoComplete="name" placeholder="Como posso te chamar?" required minLength={2} className="form-input" />
                </label>
                <label className="form-label">
                  Seu email
                  <input name="email" type="email" autoComplete="email" placeholder="voce@email.com" required className="form-input" />
                </label>
                <label className="form-label">
                  Mensagem
                  <textarea name="message" rows={4} placeholder="Conte um pouco sobre sua ideia..." required minLength={10} className="form-input resize-y" />
                </label>
                <button type="submit" className="button-primary w-full sm:w-auto">
                  Enviar mensagem <ArrowRight size={17} />
                </button>
                {feedback && (
                  <p role="status" className="flex items-center gap-2 text-sm text-accent dark:text-[#a9d2c2]">
                    <Check size={16} /> {feedback}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
      <footer className="bg-[#edf2ed] px-5 pb-8 dark:bg-[#17211c] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-ink/10 pt-6 text-sm text-muted dark:border-white/10 dark:text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {profile.name}. Feito com cuidado.</p>
          <a href="#inicio" className="inline-flex items-center gap-2 font-medium hover:text-accent">
            Voltar ao topo <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </>
  );
}

export function SectionDivider() {
  return <div aria-hidden="true" className="mx-auto max-w-7xl px-5 sm:px-8"><div className="h-px bg-ink/[0.07] dark:bg-white/10" /></div>;
}

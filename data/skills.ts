import {
  Blocks,
  Braces,
  Code2,
  Database,
  Figma,
  GitBranch,
  Layers3,
  Server,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number; icon: LucideIcon }[];
};

export const skillGroups: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Blocks,
    skills: [
      { name: "React", level: 88, icon: Code2 },
      { name: "Next.js", level: 82, icon: Layers3 },
      { name: "TypeScript", level: 84, icon: Braces },
      { name: "Tailwind CSS", level: 90, icon: Blocks },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 76, icon: Server },
      { name: "APIs REST", level: 82, icon: Terminal },
      { name: "PostgreSQL", level: 72, icon: Database },
    ],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 86, icon: GitBranch },
      { name: "Figma", level: 70, icon: Figma },
      { name: "VS Code", level: 92, icon: Terminal },
    ],
  },
  {
    title: "Outros",
    icon: Layers3,
    skills: [
      { name: "UI responsiva", level: 88, icon: Layers3 },
      { name: "Acessibilidade", level: 75, icon: Blocks },
      { name: "Design systems", level: 72, icon: Figma },
    ],
  },
];

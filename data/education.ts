import { BookOpen, type LucideIcon } from "lucide-react";

export type Education = {
  course: string;
  institution: string;
  period: string;
  detail: string;
  icon: LucideIcon;
};

export const education: Education[] = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Sua instituição de ensino",
    period: "2023 — 2025",
    detail: "Formação em desenvolvimento de software, banco de dados e engenharia de sistemas.",
    icon: BookOpen,
  },
];

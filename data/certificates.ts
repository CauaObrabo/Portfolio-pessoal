import { Award, type LucideIcon } from "lucide-react";

export type Certificate = {
  name: string;
  issuer: string;
  year: string;
  href: string;
  icon: LucideIcon;
};

export const certificates: Certificate[] = [
  {
    name: "Desenvolvimento Web",
    issuer: "Plataforma de cursos",
    year: "2024",
    href: "#contato",
    icon: Award,
  },
  {
    name: "Fundamentos de UX/UI",
    issuer: "Plataforma de cursos",
    year: "2023",
    href: "#contato",
    icon: Award,
  },
];

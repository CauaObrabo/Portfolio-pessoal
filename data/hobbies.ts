import { BookOpen, Camera, Headphones, Mountain, type LucideIcon } from "lucide-react";

export const hobbies: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Fotografia",
    description: "Gosto de guardar detalhes e encontrar beleza nas pequenas coisas.",
    icon: Camera,
  },
  {
    title: "Trilhas",
    description: "Um bom caminho ao ar livre sempre renova as ideias.",
    icon: Mountain,
  },
  {
    title: "Leitura",
    description: "Livros de tecnologia, criatividade e boas histórias.",
    icon: BookOpen,
  },
  {
    title: "Música",
    description: "A trilha sonora que acompanha cada projeto e cada pausa.",
    icon: Headphones,
  },
];

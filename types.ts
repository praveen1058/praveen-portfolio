import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon;
  category: 'Cloud' | 'DevOps' | 'Tools' | 'General';
}

export interface NavItem {
  label: string;
  href: string;
}
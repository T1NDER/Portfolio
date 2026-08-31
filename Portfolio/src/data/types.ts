// data/types.ts

export interface NavLink {
  label: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
}

export interface InfoCard {
  value: string;
  label: string;
}

export type ProjectCategory = "html-css" | "react" | "fullstack";

export interface ProjectFilter {
  label: string;
  value: ProjectCategory | "all";
}

export interface Project {
  id: number;
  category: ProjectCategory;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;  
  demoUrl: string;     
}

export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
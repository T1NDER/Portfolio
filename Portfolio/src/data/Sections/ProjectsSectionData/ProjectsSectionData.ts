import type { Project, ProjectFilter, ProjectCategory } from "@data/types";

export const projectFilters: ProjectFilter[] = [
  { label: "Все", value: "all" },
  { label: "HTML & CSS", value: "html-css" },
  { label: "React", value: "react" },
  { label: "React + Node.js", value: "fullstack" },
];

export const projectsData: Project[] = [
  {
    id: 1,
    category: "html-css",
    title: "Vintage Food",
    description: "Адаптивный лендинг бургерной.",
    tags: ["HTML", "CSS", "Github Pages"],
    image: "./src/assets/images/projects/VintageFood-project.jpg",
    githubUrl: "https://github.com/T1NDER/Vintage-food",
    demoUrl: "https://t1nder.github.io/Vintage-food/",
  },
  {
    id: 2,
    category: "html-css",
    title: "Music Player",
    description: "Адаптивный лендинг музыкального плеера.",
    tags: ["HTML", "CSS", "Github Pages"],
    image: "./src/assets/images/projects/MusicPlayer-project.jpg",
    githubUrl: "https://github.com/T1NDER/Music-player",
    demoUrl: "https://t1nder.github.io/Music-player",
  },
  {
    id: 3,
    category: "html-css",
    title: "Wildlife Welfare Hub",
    description: "Адаптивный лендинг организации по защите и охране природы и животных.",
    tags: ["HTML", "CSS", "Github Pages"],
    image: "./src/assets/images/projects/WWH-project.jpg",
    githubUrl: "https://github.com/T1NDER/WWH",
    demoUrl: "https://t1nder.github.io/WWH/",
  },
  {
    id: 4,
    category: "react",
    title: "Wisdom Hub",
    description: "Лендинг платформы искусственного интеллекта.",
    tags: ["React", "CSS", "Github Pages"],
    image: "./src/assets/images/projects/WH-project.jpg",
    githubUrl: "https://github.com/T1NDER/WH",
    demoUrl: "https://t1nder.github.io/WH/",
  },
  {
    id: 5,
    category: "react",
    title: "Cloud Budget",
    description: "Лендинг для приложения, которое предоставляет удобное хранение и управление бюджетом.",
    tags: ["React", "CSS", "Github Pages"],
    image: "./src/assets/images/projects/CloudBudget-project.jpg",
    githubUrl: "https://github.com/T1NDER/Cloud-budget",
    demoUrl: "https://t1nder.github.io/Cloud-budget/",
  },
  {
    id: 6,
    category: "react",
    title: "Constructor",
    description: "Лендинг для приложения, которое предоставляет удобное хранение и управление бюджетом.",
    tags: ["React", "CSS", "Github Pages"],
    image: "./src/assets/images/projects/Constructor-project.jpg",
    githubUrl: "https://github.com/T1NDER/Constructor",
    demoUrl: "https://t1nder.github.io/Constructor/",
  },
];

export const getProjectsByCategory = (category: ProjectCategory | "all"): Project[] => {
  if (category === "all") return projectsData;
  return projectsData.filter((project) => project.category === category);
};
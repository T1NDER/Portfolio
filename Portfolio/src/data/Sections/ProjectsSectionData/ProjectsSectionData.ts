import type { Project, ProjectFilter, ProjectCategory } from "@data/types";
import vintageFoodImg from "@assets/images/projects/VintageFood-project.jpg";
import musicPlayerImg from "@assets/images/projects/MusicPlayer-project.jpg";
import wwhImg from "@assets/images/projects/WWH-project.jpg";
import wisdomHubImg from "@assets/images/projects/WH-project.jpg";
import cloudBudgetImg from "@assets/images/projects/CloudBudget-project.jpg";
import constructorImg from "@assets/images/projects/Constructor-project.jpg";
import alivioImg from "@assets/images/projects/Alivio-project.jpg";

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
    tags: ["HTML", "CSS", "JS", "Github Pages"],
    image: vintageFoodImg,
    githubUrl: "https://github.com/T1NDER/Vintage-food",
    demoUrl: "https://t1nder.github.io/Vintage-food/",
  },
  {
    id: 2,
    category: "html-css",
    title: "Music Player",
    description: "Адаптивный лендинг музыкального плеера.",
    tags: ["HTML", "CSS", "JS", "Github Pages"],
    image: musicPlayerImg, 
    githubUrl: "https://github.com/T1NDER/Music-player",
    demoUrl: "https://t1nder.github.io/Music-player/",
  },
  {
    id: 3,
    category: "html-css",
    title: "Wildlife Welfare Hub",
    description: "Адаптивный лендинг организации по защите и охране природы и животных.",
    tags: ["HTML", "CSS", "JS", "Github Pages"],
    image: wwhImg, 
    githubUrl: "https://github.com/T1NDER/WWH",
    demoUrl: "https://t1nder.github.io/WWH/",
  },
  {
    id: 4,
    category: "react",
    title: "Wisdom Hub",
    description: "Лендинг платформы искусственного интеллекта.",
    tags: ["React", "CSS", "Github Pages"],
    image: wisdomHubImg, 
    githubUrl: "https://github.com/T1NDER/WH",
    demoUrl: "https://t1nder.github.io/WH/",
  },
  {
    id: 5,
    category: "react",
    title: "Cloud Budget",
    description: "Лендинг для приложения, которое предоставляет удобное хранение и управление бюджетом.",
    tags: ["React", "CSS", "Github Pages"],
    image: cloudBudgetImg, 
    githubUrl: "https://github.com/T1NDER/Cloud-budget",
    demoUrl: "https://t1nder.github.io/Cloud-budget/",
  },
  {
    id: 6,
    category: "react",
    title: "Constructor",
    description: "Лендинг для приложения, которое предоставляет удобное хранение и управление бюджетом.",
    tags: ["React", "CSS", "Github Pages"],
    image: constructorImg, 
    githubUrl: "https://github.com/T1NDER/Constructor",
    demoUrl: "https://t1nder.github.io/Constructor/",
  },
  {
    id: 7,
    category: "react",
    title: "Alivio",
    description: "Лендинг для приложения, которое помогает осознанно управлять стрессом через персонализированные дневники.",
    tags: ["React", "CSS", "Github Pages"],
    image: alivioImg, 
    githubUrl: "https://github.com/T1NDER/Alivio",
    demoUrl: "https://t1nder.github.io/Alivio/",
  },
];

export const getProjectsByCategory = (category: ProjectCategory | "all"): Project[] => {
  if (category === "all") return projectsData;
  return projectsData.filter((project) => project.category === category);
};
export interface Skill {
    name: string;
}

export interface LearningItem {
    name: string;
    progress: number;
}

export interface SkillGroup {
    title: string;
    label: string;
    index: string;
    count: number;
    skills: Skill[];
}

export interface SkillsData {
    sectionMeta: string;
    sectionTitle: string;
    sectionAccent: string;
    sectionDescription: string;
    stats: {
        technologies: number;
        experience: number;
    };
    terminal: {
        command1: string;
        output1: string;
        command2: string;
        output2: string;
    };
    frontend: SkillGroup;
    backend: SkillGroup;
    tools: SkillGroup;
    learning: LearningItem[];
    design: SkillGroup;
}

export const skillsData: SkillsData = {
    sectionMeta: "AVAILABLE FOR WORK · 2025",
    sectionTitle: "Tech stack.",
    sectionAccent: "stack",
    sectionDescription: "Инструменты, которые я выбираю для решения задач. Не гонюсь за трендами — ценю надёжность, скорость и приятный DX.",
    stats: {
        technologies: 12, 
        experience: 1
    },
    terminal: {
        command1: "stack --list",
        output1: "→ loading preferences...",
        command2: "echo $FAV",
        output2: "→ typescript + react"
    },
    frontend: {
        title: "Frontend",
        label: "// 01 · frontend",
        index: "08",
        count: 8,
        skills: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "CSS3" }
        ]
    },
    backend: {
        title: "Backend",
        label: "// 02 · backend",
        index: "06",
        count: 6,
        skills: [
            { name: "Node.js" },
            { name: "Express" },
            { name: "PostgreSQL" },
            { name: "SQLite" },
            { name: "FastAPI" },
            { name: "Django" }
        ]
    },
    tools: {
        title: "Dev Tools",
        label: "// 03 · tools",
        index: "06",
        count: 6,
        skills: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "VS Code" },
            { name: "PyCharm" },
            { name: "Vite" }
        ]
    },
    learning: [
        { name: "Next.js", progress: 10 },
        { name: "Tailwind CSS", progress: 30 }, 
        { name: "Docker", progress: 15 }
    ],
    design: {
        title: "Design",
        label: "// 05 · design",
        index: "03",
        count: 3,
        skills: [
            { name: "Figma" },
            { name: "Responsive" },
            { name: "UI/UX" }
        ]
    }
};
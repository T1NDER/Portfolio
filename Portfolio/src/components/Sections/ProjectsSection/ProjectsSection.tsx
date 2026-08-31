import { useState } from "react";
import { projectFilters, getProjectsByCategory } from "@dataSection/ProjectsSectionData/ProjectsSectionData";
import type { ProjectCategory, Project } from "@data/types";
import "@componentsSection/ProjectsSection/ProjectsSection.css";
import githubIcon from "@assets/icons/projects/GitHub.png";
import linkIcon from "@assets/icons/projects/Link.png";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const getCategoryName = (category: string) => {
        switch (category) {
            case "html-css": return "HTML & CSS";
            case "react": return "React";
            case "fullstack": return "React + Node.js";
            default: return category;
        }
    };

    return (
        <article className="project-card">
            <div className="project-card__image-wrapper">
                <img src={project.image} alt={project.title} className="project-card__image" />
            </div>
            <div className="project-card__content">
                <span className="project-card__category">{getCategoryName(project.category)}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="project-card__tag">{tag}</span>
                    ))}
                </div>
                <div className="project-card__buttons">
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-card__btn project-card__btn--github"
                    >
                        <img src={githubIcon} alt="GitHub" className="btn-icon" />
                        <span>Код</span>
                    </a>
                    <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-card__btn project-card__btn--demo"
                    >
                        <img src={linkIcon} alt="Demo" className="btn-icon" />
                        <span>Демо</span>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
    const filteredProjects = getProjectsByCategory(activeFilter);

    return (
        <section className="projects-section" id="projects">
            <div className="projects-section__container">
                <div className="projects-section__header">
                    <div>
                        <div className="projects-section__meta">
                            <span className="status-dot"></span>
                            <span>SELECTED WORK · 2023—2025</span>
                        </div>
                        <h2 className="projects-section__title">
                            Recent<br />
                            <span className="accent">projects.</span>
                        </h2>
                    </div>
                    <p className="projects-section__description">
                        Избранные проекты, над которыми я работал. 
                        От <span className="highlight">простых</span> до <span className="highlight">сложных лендингов</span> — каждый решает реальную задачу.
                    </p>
                </div>

                <div className="projects-section__filters">
                    {projectFilters.map((filter) => (
                        <button
                            key={filter.value}
                            className={`projects-section__filter ${activeFilter === filter.value ? "projects-section__filter--active" : ""}`}
                            onClick={() => setActiveFilter(filter.value)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="projects-section__grid">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
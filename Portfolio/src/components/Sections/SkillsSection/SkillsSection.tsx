import { useState, useEffect, useRef } from "react";
import { skillsData } from "@dataSection/SkillsSectionData/SkillsSectionData";
import type { Skill, LearningItem } from "@dataSection/SkillsSectionData/SkillsSectionData";
import "@componentsSection/SkillsSection/SkillsSection.css";

// === Animated counter hook ===
const useCountUp = (target: number, duration: number = 1500) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | undefined;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, target, duration]);

    return { count, ref };
};

// === Card component with mouse-follow glow ===
interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = "", delay = 0 }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        cardRef.current.style.setProperty("--mx", `${x}%`);
        cardRef.current.style.setProperty("--my", `${y}%`);
    };

    return (
        <div
            ref={cardRef}
            className={`card ${className}`}
            style={{ animationDelay: `${delay}ms` }}
            onMouseMove={handleMouseMove}
        >
            {children}
        </div>
    );
};

// === Terminal component ===
const Terminal: React.FC = () => {
    const { terminal } = skillsData;

    return (
        <div className="terminal">
            <div className="terminal-line">
                <span className="terminal-prompt">~</span>
                <span className="terminal-cmd">{terminal.command1}</span>
            </div>
            <div className="terminal-output">{terminal.output1}</div>
            <div className="terminal-line">
                <span className="terminal-prompt">~</span>
                <span className="terminal-cmd">{terminal.command2}</span>
            </div>
            <div className="terminal-output">{terminal.output2}</div>
            <div className="terminal-line">
                <span className="terminal-prompt">~</span>
                <span className="cursor"></span>
            </div>
        </div>
    );
};

// === Learning progress component ===
interface LearningProgressProps {
    item: LearningItem;
}

const LearningProgress: React.FC<LearningProgressProps> = ({ item }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setWidth(item.progress), 100);
        return () => clearTimeout(timer);
    }, [item.progress]);

    return (
        <div className="learning-item">
            <span className="learning-name">{item.name}</span>
            <div className="learning-progress">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${width}%` }}></div>
                </div>
                <span>{item.progress}%</span>
            </div>
        </div>
    );
};

// === Stats component ===
const Stats: React.FC = () => {
    const { count: techCountVal, ref: techRef } = useCountUp(skillsData.stats.technologies);
    const { count: expCountVal, ref: expRef } = useCountUp(skillsData.stats.experience); // Теперь здесь передаётся число 1

    return (
        <div className="stats-grid">
            <div className="stat" ref={techRef}>
                <div className="stat-value">
                    {techCountVal}
                    <span className="unit"></span>
                </div>
                <div className="stat-label">технологий</div>
            </div>
            <div className="stat" ref={expRef}>
                <div className="stat-value">
                    {expCountVal}+  {/* <-- Плюс добавляем здесь, в JSX */}
                    <span className="unit">y</span>
                </div>
                <div className="stat-label">опыта</div>
            </div>
        </div>
    );
};

// === Skill tags component ===
interface SkillTagsProps {
    skills: Skill[];
}

const SkillTags: React.FC<SkillTagsProps> = ({ skills }) => (
    <div className="tech-tags">
        {skills.map((skill, index) => (
            <span key={index} className="tag">{skill.name}</span>
        ))}
    </div>
);

// === Mini tags component ===
interface MiniTagsProps {
    skills: Skill[];
}

const MiniTags: React.FC<MiniTagsProps> = ({ skills }) => (
    <div className="mini-tags">
        {skills.map((skill, index) => (
            <span key={index} className="mini-tag">{skill.name}</span>
        ))}
    </div>
);

// === Main SkillsSection component ===
export default function SkillsSection() {
    const { 
        sectionMeta, 
        sectionTitle, 
        sectionAccent, 
        sectionDescription, 
        frontend, 
        backend, 
        tools, 
        learning, 
        design 
    } = skillsData;

    // Разбиваем заголовок на части для красивого отображения (Tech и stack.)
    const [titlePart1, titlePart2] = sectionTitle.split(" ");

    return (
        <section className="skills-section" id="skills">
            <div className="section-container">
                {/* Header */}
                <div className="section-header">
                    <div>
                        <div className="section-meta">
                            <span className="status-dot"></span>
                            <span>{sectionMeta}</span>
                        </div>
                        {/* Теперь sectionTitle используется, ошибка исчезнет */}
                        <h1 className="section-title">
                            {titlePart1}<br />
                            <span className="accent">{titlePart2 || sectionAccent}</span>
                        </h1>
                    </div>
                    <p className="section-description">{sectionDescription}</p>
                </div>

                {/* Bento Grid */}
                <div className="bento">
                    {/* Main Frontend Card */}
                    <Card className="card-large" delay={50}>
                        <div className="card-header">
                            <span className="card-label">{frontend.label}</span>
                            <span className="card-index">{frontend.index}</span>
                        </div>
                        <div className="card-main-title">
                            Front<span className="italic">end</span>
                        </div>
                        <div className="card-main-sub">Основной стек для интерфейсов</div>
                        <SkillTags skills={frontend.skills} />
                        <div className="orbit">
                            <div className="orbit-dot"></div>
                        </div>
                    </Card>

                    {/* Stats Card */}
                    <Card delay={120}>
                        <div className="card-header">
                            <span className="card-label">// stats</span>
                        </div>
                        <Stats />
                    </Card>

                    {/* Terminal Card */}
                    <Card delay={190}>
                        <div className="card-header">
                            <span className="card-label">// terminal</span>
                        </div>
                        <Terminal />
                    </Card>

                    {/* Backend Card */}
                    <Card className="card-wide" delay={260}>
                        <div className="card-header">
                            <span className="card-label">{backend.label}</span>
                            <span className="card-index">{backend.index}</span>
                        </div>
                        <div className="category-name">{backend.title}</div>
                        <div className="category-count">серверная часть и данные</div>
                        <MiniTags skills={backend.skills} />
                    </Card>

                    {/* Tools Card */}
                    <Card delay={330}>
                        <div className="card-header">
                            <span className="card-label">{tools.label}</span>
                            <span className="card-index">{tools.index}</span>
                        </div>
                        <div className="category-name">{tools.title}</div>
                        <div className="category-count">рабочий процесс</div>
                        <MiniTags skills={tools.skills} />
                    </Card>

                    {/* Learning Card */}
                    <Card delay={400}>
                        <div className="card-header">
                            <span className="card-label">// 04 · learning</span>
                            <span className="status-dot" style={{ marginLeft: "auto" }}></span>
                        </div>
                        <div className="category-name" style={{ marginBottom: "14px" }}>Сейчас учу</div>
                        {learning.map((item, index) => (
                            <LearningProgress key={index} item={item} />
                        ))}
                    </Card>

                    {/* Design Card */}
                    <Card delay={470}>
                        <div className="card-header">
                            <span className="card-label">{design.label}</span>
                            <span className="card-index">{design.index}</span>
                        </div>
                        <div className="category-name">{design.title}</div>
                        <div className="category-count">визуал и прототипы</div>
                        <MiniTags skills={design.skills} />
                    </Card>
                </div>

                {/* Footer */}
                <div className="footer-line">
                    <span>last updated · {new Date().toLocaleDateString("ru-RU", { month: "short", year: "numeric" })}</span>
                    <span>open to collab <span className="arrow">→</span></span>
                </div>
            </div>
        </section>
    );
}
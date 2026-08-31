import { useRef } from "react";
import { aboutData } from "@dataSection/AboutSectionData/AboutSectionData";
import "@componentsSection/AboutSection/AboutSection.css";

export default function AboutSection() {
    const { sectionLabel, sectionTitle, sectionDesc, heading, paragraphs, infoCards } = aboutData;
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const card = cardsRef.current[index];
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
    };


    const titleParts = sectionTitle.split(" ");
    const titleFirst = titleParts[0];
    const titleRest = titleParts.slice(1).join(" ");

    return (
        <section className="about-section" id="about">
            <div className="about-section__container">
                {/* Header */}
                <div className="about-section__header">
                    <div>
                        <div className="about-section__meta">
                            <span className="status-dot"></span>
                            <span>{sectionLabel.toUpperCase()} · 2025</span>
                        </div>
                        <h2 className="about-section__title">
                            {titleFirst}<br />
                            <span className="accent">{titleRest}</span>
                        </h2>
                    </div>
                    <p className="about-section__description">
                        {sectionDesc}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="about-section__bento">
                    {/* About Card */}
                    <div
                        className="about-card about-card--large"
                        ref={(el) => { cardsRef.current[0] = el; }}
                        onMouseMove={(e) => handleMouseMove(e, 0)}
                    >
                        <div className="about-card__header">
                            <span className="about-card__label">// 01 · who am i</span>
                            <span className="about-card__index">bio</span>
                        </div>
                        <div className="about-body">
                            <div>
                                <div className="about-top">
                                    <div className="avatar">Д</div>
                                    <div className="about-info">
                                        <div className="about-name">Дмитрий Сафонов</div>
                                        <div className="about-role">{heading}</div>
                                        <div className="about-location">Russia</div>
                                    </div>
                                </div>
                                <p className="about-bio">
                                    {paragraphs[0]} <br /><br />
                                    {paragraphs[1]}
                                </p>
                            </div>
                            <div className="about-tags">
                                <span className="about-tag">React</span>
                                <span className="about-tag">JavaScript</span>
                                <span className="about-tag">TypeScript</span>
                                <span className="about-tag">Node.js</span>
                                <span className="about-tag">Python</span>
                                <span className="about-tag">SQL</span>
                                <span className="about-tag">Git</span>
                            </div>
                        </div>
                        <div className="orbit">
                            <div className="orbit-dot"></div>
                        </div>
                    </div>

                    {/* Experience Card */}
                    <div
                        className="about-card about-card--tall"
                        ref={(el) => { cardsRef.current[1] = el; }}
                        onMouseMove={(e) => handleMouseMove(e, 1)}
                    >
                        <div className="about-card__header">
                            <span className="about-card__label">// 02 · experience</span>
                            <span className="about-card__index">02</span>
                        </div>
                        <div className="exp-list">
                            <div className="exp-item">
                                <div className="exp-year">JUN — JUL 2026</div>
                                <div className="exp-role">Intern</div>
                                <div className="exp-company">2BEPARTHERS</div>
                            </div>
                        </div>
                    </div>

                    {/* Overview Card */}
                    <div
                        className="about-card about-card--wide"
                        ref={(el) => { cardsRef.current[2] = el; }}
                        onMouseMove={(e) => handleMouseMove(e, 2)}
                    >
                        <div className="about-card__header">
                            <span className="about-card__label">// 03 · overview</span>
                            <span className="about-card__index">summary</span>
                        </div>
                        <div className="overview-content">
                            <div className="overview-stats">
                                {infoCards.map((card, index) => (
                                    <div key={index} className="proj-stat">
                                        <div className="proj-stat-value">
                                            {card.value}{" "}
                                            <span className="unit">
                                                {card.value === "1" ? "год" : ""}
                                            </span>
                                        </div>
                                        <div className="proj-stat-label">{card.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="about-section__footer">
                    <span>last updated · 2025</span>
                    <span>let's connect <span className="arrow">→</span></span>
                </div>
            </div>
        </section>
    );
}
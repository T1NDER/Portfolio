import { useState } from "react";
import "@componentsSection/ContactsSection/ContactsSection.css";

export default function ContactsSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://formspree.io/f/mrpzapoj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: "Сообщение с портфолио",
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
                const btn = document.getElementById("submit-btn");
                if (btn) {
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = "✓ Отправлено";
                    btn.classList.add("success");
                    
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.classList.remove("success");
                    }, 2500);
                }
            }
        } catch (error) {
            console.error("Ошибка отправки:", error);
            alert("Произошла ошибка при отправке. Попробуйте позже.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="contacts-section" id="contact">
            <div className="contacts-container">
                {/* Header */}
                <div className="contacts-header">
                    <div>
                        <div className="contacts-meta">
                            <span className="status-dot"></span>
                            <span>GET IN TOUCH · 2025</span>
                        </div>
                        <h2 className="contacts-title">
                            Let's<br />
                            <span className="accent">talk.</span>
                        </h2>
                    </div>
                    <p className="contacts-description">
                        Есть идея, проект или просто хотите <span className="highlight">поприветствовать</span>? 
                        Я всегда открыт к интересным задачам и новым знакомствам.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="contacts-bento">
                    {/* Main CTA Card */}
                    <div className="contacts-card contacts-card--large">
                        <div className="contacts-card__header">
                            <span className="contacts-card__label">// 01 · contact</span>
                            <span className="contacts-card__index">hello@</span>
                        </div>
                        <div className="cta-content">
                            <div className="cta-title">
                                Let's build<br />
                                something<br />
                                <span className="italic">great</span> <span className="accent-line">.</span>
                            </div>
                            <p className="cta-text">
                                Расскажите о своём проекте — обсудим идею, сроки и как я могу помочь. 
                            </p>
                            <div className="cta-buttons">
                                <a href="mailto:your@email.com" className="email-btn">
                                    Написать на почту
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7"/>
                                        <path d="M7 7h10v10"/>
                                    </svg>
                                </a>
                                <a href="https://t.me/tinder0k" className="cta-secondary" target="_blank" rel="noopener noreferrer">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                                    </svg>
                                    Telegram
                                </a>
                            </div>
                        </div>
                        <div className="orbit">
                            <div className="orbit-dot"></div>
                        </div>
                    </div>

                    {/* Status Card */}
                    <div className="contacts-card">
                        <div className="contacts-card__header">
                            <span className="contacts-card__label">// status</span>
                            <span className="status-dot"></span>
                        </div>
                        <div className="status-big">
                            <span className="status-indicator"></span>
                            <span className="status-text">Доступен</span>
                        </div>
                        <div className="status-sub">Открыт для новых проектов и коллабораций</div>
                        <div className="availability-list">
                            <div className="avail-item">
                                <span className="label">Freelance</span>
                                <span className="value">✓ OK</span>
                            </div>
                            <div className="avail-item">
                                <span className="label">Full-time</span>
                                <span className="value">✓ OK</span>
                            </div>
                            <div className="avail-item">
                                <span className="label">Консалтинг</span>
                                <span className="value">✓ OK</span>
                            </div>
                        </div>
                    </div>

                    {/* Socials Card */}
                    <div className="contacts-card">
                        <div className="contacts-card__header">
                            <span className="contacts-card__label">// 02 · socials</span>
                            <span className="contacts-card__index">02</span>
                        </div>
                        <div className="socials-list">
                            <a href="https://t.me/tinder0k" className="social-link" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                                    </svg>
                                </div>
                                <div className="social-info">
                                    <div className="social-name">Telegram</div>
                                    <div className="social-handle">@tinder0k</div>
                                </div>
                                <svg className="social-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7"/>
                                    <path d="M7 7h10v10"/>
                                </svg>
                            </a>
                            <a href="https://github.com/T1NDER" className="social-link" target="_blank" rel="noopener noreferrer">
                                <div className="social-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                </div>
                                <div className="social-info">
                                    <div className="social-name">GitHub</div>
                                    <div className="social-handle">@T1NDER</div>
                                </div>
                                <svg className="social-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7"/>
                                    <path d="M7 7h10v10"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="contacts-card contacts-card--wide">
                        <div className="contacts-card__header">
                            <span className="contacts-card__label">// 03 · quick message</span>
                            <span className="contacts-card__index">fast</span>
                        </div>
                        <div className="form-card-desc">
                            Короткое сообщение — отвечу в течение рабочего дня.
                        </div>
                        <form className="contacts-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="input-wrap">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        placeholder=" " 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="name">Имя</label>
                                </div>
                                <div className="input-wrap">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        placeholder=" " 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="input-wrap">
                                <textarea 
                                    id="message" 
                                    name="message"
                                    placeholder=" " 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <label htmlFor="message">Сообщение</label>
                            </div>
                            <button 
                                type="submit" 
                                className="submit-btn" 
                                id="submit-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? "Отправляю..." : "Отправить"}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"/>
                                    <path d="M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="contacts-footer">
                    <a href="mailto:your@email.com" className="footer-email">your@email.com</a>
                    <span>© 2025 · made with <span className="arrow">♥</span></span>
                </div>
            </div>
        </section>
    );
}
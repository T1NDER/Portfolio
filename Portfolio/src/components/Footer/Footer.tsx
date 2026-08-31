import "@components/Footer/Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__main">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__brand-name">
                            <span className="footer__brand-dot"></span>
                            Дмитрий Сафонов
                        </div>
                        <p className="footer__brand-desc">
                            Веб-разработчик. Создаю быстрые интерфейсы и продуманный пользовательский опыт.
                        </p>
                        <div className="footer__brand-status">
                            <span className="footer__live-dot"></span>
                            Открыт к предложениям
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer__col">
                        <div className="footer__col-title">// НАВИГАЦИЯ</div>
                        <ul className="footer__list">
                            <li>
                                <a href="#hero">
                                    <span className="footer__num">01</span>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#projects">
                                    <span className="footer__num">02</span>
                                    Проекты
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <span className="footer__num">03</span>
                                    О себе
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <span className="footer__num">04</span>
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="footer__col">
                        <div className="footer__col-title">// СОЦСЕТИ</div>
                        <div className="footer__socials">
                            <a 
                                href="https://t.me/tinder0k" 
                                className="footer__social-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                                </svg>
                                Telegram
                            </a>
                            <a 
                                href="https://github.com/T1NDER" 
                                className="footer__social-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <div className="footer__bottom-left">
                        <span>© {currentYear} · made with <span className="footer__heart">♥</span></span>
                    </div>
                    <div className="footer__bottom-right">
                        <a href="mailto:your@email.com">your@email.com</a>
                        <span className="footer__back-top" onClick={scrollToTop}>
                            back to top <span className="footer__arrow">↑</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
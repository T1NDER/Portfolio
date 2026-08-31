import "@components/Hero/Hero.css";

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-section__container">
                {/* Status Badge */}
                <div className="hero-section__badge">
                    <span className="hero-section__badge-dot"></span>
                    ДОСТУПЕН ДЛЯ НОВЫХ ПРОЕКТОВ
                </div>

                {/* Main Title */}
                <h1 className="hero-section__title">
                    Дмитрий. Разрабатываю<br />
                    <span className="hero-section__title-accent">веб-приложения под</span><br />
                    ключ.
                </h1>

                {/* Description */}
                <p className="hero-section__description">
                    Проектирую и верстаю удобные интерфейсы, пишу надежный бэкенд и<br />
                    связываю всё в продуманный продукт.
                </p>

                {/* Buttons */}
                <div className="hero-section__buttons">
                    <a href="#projects" className="hero-section__btn hero-section__btn--primary">
                        Посмотреть работы
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"/>
                            <path d="M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                    <a href="#contact" className="hero-section__btn hero-section__btn--secondary">
                        Связаться
                    </a>
                </div>
            </div>
        </section>
    );
}
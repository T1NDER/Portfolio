import { useState, useEffect } from "react";
import "@components/Header/Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { href: "#hero", label: "Главная" },
        { href: "#about", label: "О себе" },
        { href: "#projects", label: "Проекты" },
        { href: "#contact", label: "Контакты" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
            <div className="header__container">
                {/* Logo */}
                <a 
                    href="#hero" 
                    className="header__logo"
                    onClick={(e) => handleSmoothScroll(e, "#hero")}
                >
                    <span className="header__logo-dot"></span>
                    Дмитрий Сафонов
                </a>

                {/* Desktop Navigation */}
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a 
                                    href={link.href} 
                                    className="header__nav-link"
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <a 
                    href="#contact" 
                    className="header__cta"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                >
                    Связаться
                </a>

                {/* Burger Button */}
                <button
                    className={`header__burger ${isMenuOpen ? "header__burger--active" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Открыть меню"
                >
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                </button>

                {/* Mobile Menu Panel */}
                <div className={`header__mobile-menu ${isMenuOpen ? "header__mobile-menu--open" : ""}`}>
                    {/* Close Button */}
                    <button
                        className="header__close-btn"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Закрыть меню"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>

                    <nav className="header__mobile-nav">
                        <ul className="header__mobile-nav-list">
                            {navLinks.map((link, index) => (
                                <li
                                    key={link.href}
                                    className="header__mobile-nav-item"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <a 
                                        href={link.href} 
                                        className="header__mobile-nav-link" 
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                    >
                                        <span className="header__mobile-nav-num">0{index + 1}</span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
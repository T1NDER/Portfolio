import type { Stat } from "@data/types";

interface HeroButton {
    label: string;
    url: string;
    variant: "primary" | "secondary";
}

interface HeroData {
    subtitle: string;
    title: string;
    description: string;
    buttons: HeroButton[];
    stats: Stat[];
}

export const heroData: HeroData = {
    subtitle: "Веб-разработчик",
    title: "Создаю простые и функциональные веб-решения",
    description: "Специализируюсь на разработке современных интерфейсов...",
    buttons: [
        { label: "Проекты", url: "#projects", variant: "primary" },
        { label: "Связаться", url: "#contact", variant: "secondary" },
    ],
    stats: [
        { value: "1", label: "Года опыта" },
        { value: "10", label: "Проектов" },
    ],
};

export type { HeroData };
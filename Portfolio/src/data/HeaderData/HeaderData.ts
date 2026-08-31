import type { NavLink } from "@data/types";

interface HeaderData {
  logo: string;
  navLinks: NavLink[];
}

export const headerData: HeaderData = {
  logo: "Дмитрий Сафонов",
  navLinks: [
    { label: "О себе", url: "#about" },
    { label: "Проекты", url: "#projects" },
  ],
};

export type { HeaderData };
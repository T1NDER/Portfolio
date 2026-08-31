import type { SocialLink } from "@data/types";

interface FooterData {
  socialLinks: SocialLink[];
  copyright: string;
}

export const footerData: FooterData = {
  socialLinks: [
    { name: "GitHub", url: "https://github.com/T1NDER", icon: "/icons/github.svg" },
    { name: "Telegram", url: "https://t.me/tinder0k", icon: "/icons/telegram.svg" },
  ],
  copyright: "© 2026 Сафонов Дмитрий.",
};

export type { FooterData };
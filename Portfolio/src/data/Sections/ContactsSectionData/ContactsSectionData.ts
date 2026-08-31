import type { ContactMethod } from "@data/types";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required: boolean;
}

interface SuccessMessage {
  title: string;
  text: string;
}

interface ContactData {
  sectionLabel: string;
  sectionTitle: string;
  sectionDesc: string;
  heading: string;
  description: string;
  methods: ContactMethod[];
  formFields: FormField[];
  submitButton: string;
  successMessage: SuccessMessage;
}

export const contactData: ContactData = {
  sectionLabel: "Контакты",
  sectionTitle: "Связаться со мной",
  sectionDesc: "Возникли вопросы? Напишите мне",
  heading: "Давайте работать вместе",
  description:
    "Я всегда открыт для обсуждения новых проектов, креативных идей и возможностей стать частью вашей команды.",
  methods: [
    {
      icon: "email",
      label: "Email",
      value: "dima73_4728@mail.ru",
    },
    {
      icon: "location",
      label: "Локация",
      value: "Россия, Московская область",
    },
    {
      icon: "phone",
      label: "Телефон",
      value: "+7 (967) 033-80-21",
    },
    {
      icon: "telegram",
      label: "Telegram",
      value: "@tinder0k",
    },
  ] as ContactMethod[],
  formFields: [
    { name: "name", label: "Имя", type: "text", placeholder: "Ваше имя", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
    { name: "subject", label: "Тема", type: "text", placeholder: "Тема сообщения", required: false },
    {
      name: "message",
      label: "Сообщение",
      type: "textarea",
      placeholder: "Подробно опишите ваш запрос",
      required: true,
    },
  ],
  submitButton: "Отправить сообщение",
  successMessage: {
    title: "Сообщение отправлено",
    text: "Спасибо за обращение. Я свяжусь с вами в ближайшее время.",
  },
};

export type { ContactData };
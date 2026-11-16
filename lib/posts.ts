export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readingTime: string;
  level: string;
  content: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "nextjs-vvedenie",
    title: "Введение в Next.js",
    excerpt:
      "Зачем нужен фреймворк поверх React и как App Router меняет подход к маршрутизации и рендерингу.",
    tag: "Next.js",
    readingTime: "6 мин",
    level: "Начальный",
    content: [
      {
        type: "paragraph",
        text: "React отвечает за построение интерфейса из компонентов, но не диктует, как организовать маршрутизацию, загрузку данных и серверный рендеринг. Next.js добавляет эти возможности поверх React и превращает набор компонентов в полноценное веб-приложение.",
      },
      {
        type: "heading",
        text: "Что даёт Next.js",
      },
      {
        type: "paragraph",
        text: "В одном проекте появляются файловая маршрутизация, серверный и статический рендеринг, оптимизация изображений и шрифтов, а также API-маршруты. Не нужно отдельно собирать инфраструктуру для каждой из этих задач.",
      },
      {
        type: "list",
        items: [
          "Файловая маршрутизация: структура папок определяет URL.",
          "Server Components: код компонента выполняется на сервере.",
          "Статическая генерация: страницы можно собрать заранее.",
          "Route Handlers: API внутри того же приложения.",
        ],
      },
      {
        type: "heading",
        text: "App Router и файловая маршрутизация",
      },
      {
        type: "paragraph",
        text: "В App Router основа приложения — директория app. Файл page.tsx превращается в страницу, layout.tsx задаёт общий каркас, а папки формируют сегменты URL. Например, файл app/about/page.tsx доступен по адресу /about.",
      },
      {
        type: "paragraph",
        text: "Динамический сегмент создаётся папкой в квадратных скобках. Файл app/blog/[slug]/page.tsx соответствует адресам /blog/nextjs-vvedenie и /blog/react-osnovy, а значение slug приходит в параметрах страницы.",
      },
      {
        type: "heading",
        text: "Server Components по умолчанию",
      },
      {
        type: "paragraph",
        text: "Компоненты в App Router по умолчанию выполняются на сервере. Они могут быть async, обращаться к базе данных и не отправлять свой JavaScript в браузер. Если нужны useState, useEffect или обработчики событий, компонент помечают директивой 'use client'.",
      },
      {
        type: "heading",
        text: "Итог",
      },
      {
        type: "paragraph",
        text: "Next.js удобно рассматривать как слой, который соединяет React-компоненты с маршрутизацией, сервером и сборкой. В этом проекте каждая из возможностей видна на отдельной странице: /about, /blog/[slug] и /api/hello.",
      },
    ],
  },
  {
    slug: "react-osnovy",
    title: "Основы React",
    excerpt:
      "Компоненты, JSX, props и state — минимальная база, на которой строится любое Next.js-приложение.",
    tag: "React",
    readingTime: "5 мин",
    level: "Начальный",
    content: [
      {
        type: "paragraph",
        text: "React предлагает описывать интерфейс как дерево компонентов. Компонент — это функция, которая получает данные и возвращает JSX. Такой подход позволяет разбивать страницу на небольшие независимые части.",
      },
      {
        type: "heading",
        text: "Компоненты и JSX",
      },
      {
        type: "paragraph",
        text: "JSX выглядит как HTML, но компилируется в вызовы React. Внутри фигурных скобок можно использовать JavaScript-выражения: выводить значения переменных, вызывать функции и строить списки через map.",
      },
      {
        type: "heading",
        text: "Props и state",
      },
      {
        type: "paragraph",
        text: "Props передаются компоненту снаружи и доступны только для чтения. State хранит данные, которые меняются во времени, и создаётся хуком useState. Изменение state запускает повторный рендер компонента.",
      },
      {
        type: "list",
        items: [
          "Props описывают входные данные компонента.",
          "State принадлежит компоненту и управляет его поведением.",
          "События, например onClick, вызывают обработчики.",
          "Хуки доступны только в клиентских компонентах.",
        ],
      },
      {
        type: "heading",
        text: "React в Next.js",
      },
      {
        type: "paragraph",
        text: "В App Router React-компонент может выполняться на сервере или в браузере. Серверные компоненты лучше подходят для данных и разметки, а клиентские — для интерактивности. Директива 'use client' в начале файла включает клиентский режим для компонента и его импортов.",
      },
      {
        type: "heading",
        text: "Итог",
      },
      {
        type: "paragraph",
        text: "Понимание компонентов, props и state достаточно, чтобы читать код этого проекта. Дальше остаётся разобраться, где именно выполняется каждый компонент и какие возможности ему доступны.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

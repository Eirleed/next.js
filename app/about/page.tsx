import type { Metadata } from "next";
import Counter from "./Counter";

export const metadata: Metadata = {
  title: "О проекте",
  description:
    "Страница о проекте: Server Component получает данные на сервере, а Client Component отвечает за интерактивность.",
};

type ProjectInfo = {
  title: string;
  description: string;
  heading: string;
  body: string;
  notes: string[];
  stack: string[];
};

async function getInfo(): Promise<ProjectInfo> {
  return {
    title: "О проекте",
    description:
      "Учебный мини-блог на Next.js App Router. Здесь встречаются серверный и клиентский подходы к компонентам.",
    heading: "Маленький проект, большие возможности",
    body: "Эта страница — Server Component. Она получает данные на сервере и может использовать async/await напрямую, без useEffect и клиентского fetch.",
    notes: [
      "Данные получены на сервере до отправки HTML в браузер.",
      "Компонент может быть async и ждать результат функции getInfo.",
      "JavaScript этого компонента не отправляется в браузер.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "App Router"],
  };
}

export default async function AboutPage() {
  const info = await getInfo();

  return (
    <div className="container">
      <section className="page-hero" aria-labelledby="about-title">
        <p className="eyebrow">
          <span className="pulse-dot" aria-hidden="true" />
          Server Component
        </p>
        <h1 id="about-title">{info.title}</h1>
        <p className="page-lead">{info.description}</p>
      </section>

      <div className="about-grid">
        <section className="info-panel" aria-labelledby="about-info-title">
          <h2 id="about-info-title">{info.heading}</h2>
          <p>{info.body}</p>

          <ul className="info-list">
            {info.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>

          <div className="stack-list" aria-label="Технологии проекта">
            {info.stack.map((item) => (
              <span className="stack-item" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <aside className="side-stack" aria-label="Интерактивный пример">
          <div className="server-note">
            <strong>Рендеринг на сервере.</strong> Функция getInfo вызывается
            при генерации страницы. В браузере остаётся только готовая
            разметка и интерактивный компонент ниже.
          </div>
          <Counter />
        </aside>
      </div>

      <section className="section" aria-labelledby="how-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Под капотом</p>
            <h2 id="how-title">Два вида компонентов</h2>
          </div>
          <p className="section-lead">
            Серверный компонент получает данные, клиентский — реагирует на
            действия пользователя.
          </p>
        </div>

        <div className="code-grid">
          <div className="code-card">
            <div className="code-card-header">
              <span>app/about/page.tsx</span>
              <span>server</span>
            </div>
            <pre>{`async function getInfo() {
  return { title: "О проекте" };
}

export default async function AboutPage() {
  const info = await getInfo();
  return <h1>{info.title}</h1>;
}`}</pre>
          </div>

          <div className="code-card">
            <div className="code-card-header">
              <span>app/about/Counter.tsx</span>
              <span>client</span>
            </div>
            <pre>{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Кликов: {count}
    </button>
  );
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  );
}

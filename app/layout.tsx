import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Первый проект на Next.js",
    template: "%s · Первый проект на Next.js",
  },
  description:
    "Учебный мини-блог на Next.js App Router: Server и Client Components, динамические маршруты и API-маршрут.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/" aria-label="На главную">
              <span className="brand-mark" aria-hidden="true">
                N
              </span>
              <span>
                next<span className="brand-accent">.first</span>
              </span>
            </Link>

            <nav className="site-nav" aria-label="Основная навигация">
              <Link href="/">Главная</Link>
              <Link href="/about">О проекте</Link>
              <Link href="/blog">Блог</Link>
              <a href="/api/hello" target="_blank" rel="noreferrer">
                API ↗
              </a>
            </nav>
          </div>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <span>Практическая работа · Next.js App Router</span>
            <span>
              Маршруты, Server Components и API — в одном проекте
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

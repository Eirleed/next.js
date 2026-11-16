import Link from "next/link";
import { posts } from "@/lib/posts";

const features = [
  {
    index: "01",
    title: "Файловая маршрутизация",
    text: "Структура папок в app автоматически становится картой сайта. Каждый page.tsx — отдельный маршрут.",
    code: "app/about/page.tsx → /about",
  },
  {
    index: "02",
    title: "Server Components",
    text: "Страницы по умолчанию рендерятся на сервере, могут быть async и не отправляют свой JavaScript в браузер.",
    code: "async function AboutPage() { … }",
  },
  {
    index: "03",
    title: "API и генерация",
    text: "Route Handlers добавляют backend-логику, а generateStaticParams заранее собирает динамические страницы.",
    code: "app/api/hello/route.ts",
  },
];

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            App Router · Next.js 16
          </p>

          <h1 id="hero-title">
            Первый проект на{" "}
            <span className="gradient-text">Next.js</span>
          </h1>

          <p className="hero-lead">
            Мини-блог, который показывает главное: файловые маршруты,
            Server и Client Components, статическую генерацию и API —
            всё в одном приложении.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/blog">
              Читать статьи <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-ghost" href="/about">
              О проекте
            </Link>
          </div>

          <ul className="hero-facts" aria-label="Ключевые особенности проекта">
            <li>2 статьи</li>
            <li>SSG + SSR</li>
            <li>API Route</li>
          </ul>
        </div>

        <aside className="hero-card" aria-label="Структура проекта">
          <div className="window-bar" aria-hidden="true">
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-dot" />
          </div>
          <pre className="file-tree">{`app/
├─ layout.tsx      # общий каркас
├─ page.tsx        # /
├─ about/
│  ├─ page.tsx     # /about
│  └─ Counter.tsx  # client
├─ blog/
│  ├─ page.tsx     # /blog
│  └─ [slug]/
│     └─ page.tsx  # /blog/:slug
└─ api/
   └─ hello/
      └─ route.ts  # GET /api/hello`}</pre>
          <div className="hero-card-footer">
            <span className="status-dot" aria-hidden="true" />
            Server-first by default
          </div>
        </aside>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Что внутри</p>
            <h2 id="features-title">Три базовые концепции</h2>
          </div>
          <p className="section-lead">
            Каждая идея из практической работы — в отдельном маршруте.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.index}>
              <span className="feature-index">{feature.index}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <code className="feature-code">{feature.code}</code>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="articles-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Мини-блог</p>
            <h2 id="articles-title">Статьи</h2>
          </div>
          <Link className="text-link" href="/blog">
            Все статьи <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="post-list">
          {posts.map((post, index) => (
            <Link
              className="post-card"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div className="post-card-top">
                <span className="tag">{post.tag}</span>
                <span className="post-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="post-meta">
                <span>
                  {post.readingTime} · {post.level}
                </span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="api-title">
        <div className="api-banner">
          <div>
            <p className="section-kicker">Route Handler</p>
            <h2 id="api-title">API внутри проекта</h2>
            <p>
              Файл <code>app/api/hello/route.ts</code> экспортирует функцию
              GET и возвращает JSON. Отдельный сервер для этого не нужен.
            </p>
          </div>
          <a
            className="button button-ghost"
            href="/api/hello"
            target="_blank"
            rel="noreferrer"
          >
            Открыть JSON <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}

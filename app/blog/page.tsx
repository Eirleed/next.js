import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Мини-блог на Next.js: статьи генерируются статически по маршруту /blog/[slug].",
};

export default function BlogPage() {
  return (
    <div className="container">
      <section className="page-hero" aria-labelledby="blog-title">
        <p className="eyebrow">
          <span className="pulse-dot" aria-hidden="true" />
          Динамический маршрут · SSG
        </p>
        <h1 id="blog-title">Мини-блог</h1>
        <p className="page-lead">
          Две статьи доступны по адресу <code>/blog/&lt;slug&gt;</code>. Список
          слагов заранее известен функции generateStaticParams, поэтому
          страницы собираются статически.
        </p>
      </section>

      <div className="blog-list">
        {posts.map((post, index) => (
          <Link
            className="blog-row"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <span className="blog-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="blog-copy">
              <span className="tag">{post.tag}</span>
              <span className="blog-title">{post.title}</span>
              <span className="blog-excerpt">{post.excerpt}</span>
            </span>
            <span className="blog-meta">
              {post.readingTime}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>

      <section className="section" aria-labelledby="blog-api-title">
        <div className="api-banner">
          <div>
            <p className="section-kicker">Проверка API</p>
            <h2 id="blog-api-title">JSON по адресу /api/hello</h2>
            <p>
              Route Handler возвращает <code>{"{ message: \"Hello from Next.js!\" }"}</code>.
              Это пример backend-логики внутри Next.js-приложения.
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

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <section className="not-found">
        <p className="eyebrow">
          <span className="pulse-dot" aria-hidden="true" />
          404
        </p>
        <h1>Страница не найдена</h1>
        <p>
          Такого маршрута или статьи нет. Вернитесь на главную или откройте
          список статей.
        </p>
        <Link className="button button-primary" href="/">
          На главную <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter-card" aria-labelledby="counter-title">
      <div className="counter-head">
        <span className="tag tag-client">Client Component</span>
        <span className="status-dot status-dot-blue" aria-hidden="true" />
      </div>

      <h2 id="counter-title">Счётчик кликов</h2>
      <p>
        Кнопка использует useState и onClick, поэтому компонент выполняется
        в браузере.
      </p>

      <button
        className="counter-button"
        type="button"
        onClick={() => setCount((value) => value + 1)}
      >
        <span>Кликов:</span>
        <span className="counter-value" aria-live="polite">
          {count}
        </span>
      </button>

      <button
        className="reset-button"
        type="button"
        onClick={() => setCount(0)}
        disabled={count === 0}
      >
        Сбросить
      </button>
    </section>
  );
}

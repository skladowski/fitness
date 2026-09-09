import "./CategoryPicker.css";
export function CategoryPicker({ onSelect }) {
  return (
    <section className="picker-view">
      <div className="picker-eyebrow">Новая тренировка</div>
      <h1 className="picker-title">Что сегодня тренируем?</h1>
      <p className="picker-sub">Выберите активность, чтобы начать запись</p>

      <div className="category-grid">
        <button
          onClick={() => onSelect("RUN")}
          className="category-card"
          style={{ "--cat-tint": "rgba(108,99,255,0.14)" }}
        >
          <div className="category-icon">🏃</div>
          <div className="category-name">Бег</div>
          <div className="category-kind">Кардио</div>
        </button>

        <button
          onClick={() => onSelect("CYCLING")}
          className="category-card"
          style={{ "--cat-tint": "rgba(56,189,248,0.14)" }}
        >
          <div className="category-icon">🚴</div>
          <div className="category-name">Велоезда</div>
          <div className="category-kind">Кардио</div>
        </button>

        <button
          onClick={() => onSelect("YOGA")}
          className="category-card"
          style={{ "--cat-tint": "rgba(34,211,168,0.14)" }}
        >
          <div className="category-icon">🧘</div>
          <div className="category-name">Йога</div>
          <div className="category-kind">Восстановление</div>
        </button>

        <button
          onClick={() => onSelect("POWER")}
          className="category-card"
          style={{ "--cat-tint": "rgba(251,146,60,0.16)" }}
        >
          <div className="category-icon">🏋️</div>
          <div className="category-name">Силовая</div>
          <div className="category-kind">Тренажёрный зал</div>
        </button>
      </div>
    </section>
  );
}

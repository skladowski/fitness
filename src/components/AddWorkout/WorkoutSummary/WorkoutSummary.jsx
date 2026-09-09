import "./WorkoutSummary.css";
export function WorkoutSummary() {
  return (
    <section className="summary-overlay">
      <div className="summary-card">
        <div className="summary-check">✓</div>
        <div className="summary-title">Тренировка завершена</div>
        <div className="summary-sub">Силовая тренировка · отличная работа</div>

        <div className="summary-stats">
          <div className="summary-stat">
            <div className="summary-stat-val">1780</div>
            <div className="summary-stat-label">Тоннаж, кг</div>
          </div>
          <div className="summary-stat">
            <div className="summary-stat-val">00:42:18</div>
            <div className="summary-stat-label">Время</div>
          </div>
          <div className="summary-stat">
            <div className="summary-stat-val">356</div>
            <div className="summary-stat-label">Ккал</div>
          </div>
        </div>

        <div className="summary-actions">
          <button className="btn">Назад к записи</button>
          <button className="btn btn-primary">Сохранить в историю</button>
        </div>
      </div>
    </section>
  );
}

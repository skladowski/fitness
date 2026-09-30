import "./WorkoutSummary.css";
import { formatDurationTimer } from "../../../utils/formatDuration";
import { activities } from "../../../constant/activities";
export function WorkoutSummary({
  timer,
  tonnage,
  workoutCalories,
  workoutType,
  onSave,
}) {
  return (
    <section className="summary-overlay">
      <div className="summary-card">
        <div className="summary-check">✓</div>
        <div className="summary-title">Тренировка завершена</div>
        <div className="summary-sub">
          {activities[workoutType].label} · отличная работа
        </div>

        <div className="summary-stats">
          <div className="summary-stat">
            <div className="summary-stat-val">{tonnage}</div>
            <div className="summary-stat-label">Тоннаж, кг</div>
          </div>
          <div className="summary-stat">
            <div className="summary-stat-val">{formatDurationTimer(timer)}</div>
            <div className="summary-stat-label">Время</div>
          </div>
          <div className="summary-stat">
            <div className="summary-stat-val">
              {Math.round(workoutCalories)}
            </div>
            <div className="summary-stat-label">Ккал</div>
          </div>
        </div>

        <div className="summary-actions">
          <button className="btn">Назад к записи</button>
    
            Сохранить в историю
          </button>
        </div>
      </div>
    </section>
  );
}

import "./StreakCard.css";
const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
export function StreakCard({ currentStreak, recordStreak, weekData }) {
  const todayIndex = (new Date().getDay() + 6) % 7;

  return (
    <div className="streak-card">
      <div className="card-header" style={{ marginBottom: 0 }}>
        <span className="card-title">Серия дней</span>
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="var(--amber)"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-2-3-6-3-6s-1 4-4 4-3-8-3-8z" />
        </svg>
      </div>

      <div className="streak-number">{currentStreak}</div>
      <div className="streak-label">
        день подряд · личный рекорд {recordStreak} дня
      </div>
      <div className="streak-days">
        {weekData.map((day, index) => {
          return (
            <div
              key={index}
              className={`streak-day ${day ? "done" : "undone"} ${index === todayIndex ? "today" : ""}`}
            >
              {" "}
            </div>
          );
        })}
      </div>
      <div className="week-days-row">
        {WEEK_DAYS.map((item) => (
          <span key={item} className="week-days">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

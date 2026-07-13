import "./PeriodSelector.css";

const daysOfPeriod = ["День", "Неделя", "Месяц", "3 Мес.", "Год"];

export function PeriodSelector({ activePeriod, onPeriodChange }) {
  return (
    <div className="period-selector">
      <div className="period-tabs">
        {daysOfPeriod.map((item) => {
          return (
            <button
              onClick={() => onPeriodChange(item)}
              key={item}
              className={`period-tab ${item === activePeriod ? "active" : ""}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

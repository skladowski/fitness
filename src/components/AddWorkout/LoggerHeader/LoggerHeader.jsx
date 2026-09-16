import "./LoggerHeader.css";
import { formatDurationTimer } from "../../../utils/formatDuration";
import { activities } from "../../../constant/activities";
export function LoggerHeader({ onPauseToggle, isPaused, timer, workoutType }) {
  return (
    <header className="logger-header">
      <div className="logger-activity">
        <div
          className="logger-activity-icon"
          style={{ "--cat-tint": activities[workoutType].color }}
        >
          {activities[workoutType].icon}
        </div>
        <div>
          <div className="logger-activity-name">
            {activities[workoutType].label}
          </div>
          <div
            className={
              isPaused
                ? "logger-activity-status paused"
                : "logger-activity-status"
            }
          >
            <span className="dot"></span>
            {isPaused ? "На паузе" : "Идет запись"}
          </div>
        </div>
      </div>

      <div className="logger-timer mono-timer">
        {formatDurationTimer(timer)}
      </div>

      <div className="logger-header-actions">
        <button
          onClick={() => onPauseToggle()}
          className="icon-btn"
          title="Пауза"
        >
          ⏸
        </button>
      </div>
    </header>
  );
}

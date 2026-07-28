import { Link } from "react-router-dom";

export function DefaultHeaderActions() {
  return (
    <>
      <Link to="/activity" className="btn">
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
        Статистика
      </Link>
      <button className="btn btn-primary">
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
        Начать тренировку
      </button>
    </>
  );
}

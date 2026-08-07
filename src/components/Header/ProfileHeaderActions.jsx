import "./Header.css";

export function ProfileHeaderActions() {
  return (
    <div className="gha-wrapper">
      <button className="btn" onClick={() => {}}>
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
        </svg>
        Сбросить
      </button>

      <button className="btn btn-primary" onClick={() => {}}>
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Сохранить
      </button>
    </div>
  );
}

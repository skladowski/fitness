import { useState } from "react";
import "./Header.css";
export function GoalsHeaderActions({ handleSave, handleReset }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleSaveClick() {
    handleSave();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 1000);
  }

  return (
    <div className="gha-wrapper">
      <button className="btn" onClick={handleReset}>
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

      <button
        className={`btn btn-primary ${isSaved ? "btn-saved" : ""}`}
        onClick={handleSaveClick}
      >
        {isSaved ? (
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
        ) : (
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
        )}
        {` ${isSaved ? "Цели сохранены" : "Сохранить цели"}`}
      </button>
    </div>
  );
}

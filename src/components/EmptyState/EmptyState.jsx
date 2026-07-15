import { Inbox } from "lucide-react";
import "./EmptyState.css";

export function EmptyState() {
  return (
    <div className="empty-state-card">
      <div className="empty-state-card__accent" />

      <div className="empty-state-card__icon">
        <Inbox size={26} color="#6b6f8a" strokeWidth={1.75} />
      </div>

      <div className="empty-state-card__title">
        Нет данных за выбранный период
      </div>

      <div className="empty-state-card__description">
        Попробуйте выбрать другой период
      </div>
    </div>
  );
}

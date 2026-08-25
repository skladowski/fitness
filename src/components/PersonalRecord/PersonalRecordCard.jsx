import "./PersonalRecordCard.css";
import { activities } from "../../constant/activities";
import { getWordForm } from "../../utils/formatters";

export function PersonalRecordCard({ records }) {
  return (
    <div className="pr-card">
      <div className="card-header">
        <span className="card-title">Личные рекорды</span>
        <span className="span-record">
          🏆{records.length}{" "}
          {getWordForm(records.length, "рекорд", "рекорда", "рекордов")}
        </span>
      </div>
      <div className="pr-list">
        {records.map((record) => (
          <div className="pr-item" key={record.type}>
            <span className="pr-icon">{activities[record.type].icon}</span>
            <div className="pr-info">
              <div className="pr-name">
                {activities[record.type].label} {record.title}
              </div>
              <div className="pr-date">{record.date}</div>
            </div>
            <div>
              <span className="pr-value">
                {record.value} {record.unit}{" "}
              </span>
              <span className="pr-badge">PR</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

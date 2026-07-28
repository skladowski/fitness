import "./SummaryBar.css";
import { activities } from "../../constant/activities";

export function SummaryCard({ goals }) {
  const summaryItems = Object.keys(goals).map((key) => {
    const metricKey = Object.keys(activities[key].metrics)[0];
    return {
      value: goals[key],
      label: activities[key].label,
      icon: activities[key].icon,
      unit: activities[key].metrics[metricKey].unit,
      type: key,
    };
  });
  const dictionaryType = {
    STEPS: "день",
    CALORIES: "день",
    ACTIVE_MINUTES: "день",
    SLEEP: "день",
    TRAINING_COUNT: "нед.",
  };
  return (
    <div className="summary-bar">
      {summaryItems.map((item) => {
        return (
          <div className="sb-item" key={item.label}>
            <div className="sb-icon sb-icon-steps">{item.icon}</div>
            <div>
              <div className="sb-val">{item.value}</div>
              <div className="sb-label">
                {item.unit} / {dictionaryType[item.type]}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { NutritionItem } from "./NutritionItem";
import { activities } from "../../constant/activities";
import "./Nutrition.css";

export function NutritionCard({ nutrition }) {
  const currentDayData = nutrition;
  if (!nutrition) return null;

  const metricKeys = Object.keys(currentDayData.metrics).filter(
    (metricName) => metricName !== "calories",
  );
  const calories = currentDayData.metrics.calories;
  //<button className="btn btn-primary"> Добавить еду</button>
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Питание</span>
        <div className="header-wrapper">
          <span className="header-value">{calories.current}</span>
          <span className="header-target">/ {calories.target}</span>
        </div>
      </div>

      <div className="macro-row">
        {metricKeys.map((key) => {
          const config = activities.NUTRITION.metrics[key];
          const data = currentDayData.metrics[key];
          return (
            <NutritionItem
              key={key}
              label={config.label}
              color={config.color}
              unit={config.unit}
              type={key}
              current={data.current}
              target={data.target}
            />
          );
        })}
      </div>
    </div>
  );
}

import { StatCard } from "./StatCard";
import { activities } from "../../constant/activities.js";
import { useContext } from "react";
import { goalContext } from "../../context/goalContext.jsx";

export function StatsGrid({ stats }) {
  const { goal } = useContext(goalContext);
  return (
    <div className="stats-grid">
      {stats?.map((item) => {
        const config = activities[item.type]; // достаем объект-конфиг
        const mKey = Object.keys(item.metrics)[0]; // достаем имя метрики
        const metricsConfig = config.metrics[mKey]; // достаем метрику из конфига
        const rawData = item.metrics[mKey];
        const finalValue = metricsConfig.transform
          ? metricsConfig.transform(rawData.current)
          : rawData.current;
        // условие ? значение_если_true : значение_если_false
        const widthPercent = goal[item.type]
          ? Math.min((finalValue / goal[item.type]) * 100, 100) // считаем проценты
          : 0;
        const realWidthPercent = goal[item.type]
          ? (finalValue / goal[item.type]) * 100
          : 0;

        const formattedValue = config.showRatio
          ? `${finalValue} / ${goal[item.type]}`
          : finalValue.toLocaleString("ru-RU"); // проверяем нужно ли нам вставлять 45/60, или просто форматировать числа

        const goalText = goal[item.type]
          ? `${Math.round(realWidthPercent)}% от цели`
          : ""; // создаем тренд от цели

        const trendText = `${item.trend > 0 ? "+" : ""} ${item.trend}% vs вчера`; // создаем тренд от вчера

        // const metaText = [goalText, trendText].filter(Boolean).join(""); // соеденяем тренды в один большой

        return (
          <StatCard
            key={item.id}
            type={item.type ? item.type : ""}
            icon={config.icon}
            label={config.label}
            value={formattedValue}
            unit={metricsConfig.unit}
            widthPercent={widthPercent}
            statProgress={item.trend}
            goalText={goalText}
            trendText={trendText}
          />
        );
      })}
    </div>
  );
}

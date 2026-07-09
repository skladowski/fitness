import { StatCard } from "./StatCard";
import { secondsToMinutes } from "../../utils/formatters.js";
import { activities } from "../../constant/activities.js";

export function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((item) => {
        const config = activities[item.type]; // достаем объект-конфиг
        const mKey = Object.keys(item.metrics)[0]; // достаем имя метрики
        const metricsConfig = config.metrics[mKey]; // достаем метрику из конфига
        const rawData = item.metrics[mKey];
        const finalValue = metricsConfig.transform
          ? metricsConfig.transform(rawData.current)
          : rawData.current;
        // условие ? значение_если_true : значение_если_false
        const widthPercent = rawData.target
          ? Math.min((rawData.current / rawData.target) * 100, 100) // считаем проценты
          : 0;

        const formattedValue = config.showRatio
          ? `${secondsToMinutes(rawData.current)} / ${secondsToMinutes(rawData.target)}`
          : finalValue.toLocaleString("ru-RU"); // проверяем нужно ли нам вставлять 45/60, или просто форматировать числа

        const goalText = rawData.target
          ? `${Math.round(widthPercent)}% от цели`
          : ""; // создаем тренд от цели

        const trendText = `${item.trend > 0 ? "+" : ""} ${item.trend}% vs вчера `; // создаем тренд от вчера

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

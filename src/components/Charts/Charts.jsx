import {
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import "./Charts.css";

export function Charts({ data, activeMetric, onMetricChange, goal }) {
  const total = data.reduce((totalValue, currentValue) => {
    return totalValue + currentValue.value;
  }, 0);
  const averageDay = Math.round(total / data.length) || 0;
  const bestDay =
    data.length > 0 ? Math.max(...data.map((item) => item.value)) : 0;
  const daysAboveGoal = data.filter((item) => {
    return item.value >= goal;
  }).length;

  const dictionaryMetrics = {
    Шаги: "шагов",
    Ккал: "калорий",
    Сон: "сна",
  };

  // Уникальный dataKey нужен, потому что recharts некорректно сопоставляет
  // ticks со сложными строковыми значениями name например 1 мая на категориальной оси
  const chartData = data.map((item, index) => ({
    ...item,
    uniqueId: `tick_${index}`,
  }));

  const importantIndices = [];
  data.forEach((item, index) => {
    if (item.name.includes(" ")) {
      importantIndices.push(index);
    }
  });

  const TARGET_TICKS_COUNT = 8;
  const step = Math.floor(data.length / TARGET_TICKS_COUNT) || 1;
  const MIN_DISTANCE = Math.floor(step * 0.6) || 1;

  const finalTickIndices = [...importantIndices];
  for (let i = 0; i < data.length; i += step) {
    const isFarEnough = finalTickIndices.every(
      (existingIndex) => Math.abs(existingIndex - i) >= MIN_DISTANCE,
    );
    if (isFarEnough) {
      finalTickIndices.push(i);
    }
  }
  finalTickIndices.sort((a, b) => a - b);
  const trueTicks = finalTickIndices.map((index) => `tick_${index}`);

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">
          Динамика {dictionaryMetrics[activeMetric]}
        </span>
        <div className="card-controls">
          <button
            className={`chip ${"Шаги" === activeMetric ? "active-chip" : ""}`}
            onClick={() => onMetricChange("Шаги")}
          >
            Шаги
          </button>
          <button
            className={`chip ${"Ккал" === activeMetric ? "active-chip" : ""}`}
            onClick={() => onMetricChange("Ккал")}
          >
            Ккал
          </button>
          <button
            className={`chip ${"Сон" === activeMetric ? "active-chip" : ""}`}
            onClick={() => onMetricChange("Сон")}
          >
            Сон
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6c63ff" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#6c63ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="uniqueId"
            ticks={trueTicks}
            tickFormatter={(value) => {
              const index = parseInt(value.replace("tick_", ""), 10);
              return chartData[index]?.name || "";
            }}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => {
              const index = parseInt(label.replace("tick_", ""), 10);
              return chartData[index]?.name || label;
            }}
          />
          <Area
            dot={{ fill: "var(--accent)", r: 3 }}
            type="linear"
            dataKey="value"
            stroke="var(--accent)"
            strokeWidth={2}
            fill="url(#stepsGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="card-stats">
        <div className="stat-item">
          <div className="stat-label">Лучший день</div>
          <div className="stat-value stat-value-accent">
            {bestDay.toLocaleString("ru-RU")}
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Среднее/день</div>
          <div className="stat-value">{averageDay.toLocaleString("ru-RU")}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Дней ≥ цели</div>
          <div className="stat-value stat-value-green">
            {daysAboveGoal} / {data.length}
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Итого</div>
          <div className="stat-value">{total.toLocaleString("ru-RU")}</div>
        </div>
      </div>
    </div>
  );
}

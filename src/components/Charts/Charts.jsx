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
  const averageDay = Math.round(total / data.length);
  const bestDay = Math.max(...data.map((item) => item.value));
  const daysAboveGoal = data.filter((item) => {
    return item.value >= goal;
  }).length;
  const dictionaryMetrics = {
    Шаги: "шагов",
    Ккал: "калорий",
    Сон: "сна",
  };
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">
          Динамика {dictionaryMetrics[activeMetric]}
        </span>
        <div className="card-controls">
          <button
            className={`chip ${"Шаги" === activeMetric ? "active-chip" : ""}`}
            onClick={() => {
              onMetricChange("Шаги");
            }}
          >
            Шаги
          </button>
          <button
            className={`chip ${"Ккал" === activeMetric ? "active-chip" : ""}`}
            onClick={() => {
              onMetricChange("Ккал");
            }}
          >
            Ккал
          </button>
          <button
            className={`chip ${"Сон" === activeMetric ? "active-chip" : ""}`}
            onClick={() => {
              onMetricChange("Сон");
            }}
          >
            Сон
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6c63ff" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#6c63ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
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

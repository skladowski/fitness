import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import "./Charts.css";
import { LineChartIcon } from "lucide-react";
export function Charts({ data }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Динамика шагов</span>
        <div className="card-controls">
          <button className="chip active-chip">Шаги</button>
          <button className="chip">Ккал</button>
          <button className="chip">Пульс</button>
        </div>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot legend-dot-fact"></span>
          Факт
        </div>
        <div className="legend-item">
          <span className="legend-dot legend-dot-target"></span>
          Цель
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
          <div className="stat-value stat-value-accent">14 320</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Среднее/день</div>
          <div className="stat-value">8 973</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Дней ≥ цели</div>
          <div className="stat-value stat-value-green">19 / 27</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Итого</div>
          <div className="stat-value">247 194</div>
        </div>
      </div>
    </div>
  );
}

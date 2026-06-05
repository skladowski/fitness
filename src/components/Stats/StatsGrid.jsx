import { statsData } from "../../mocks/StatsData";
import { StatCard } from "./StatCard";

export function StatsGrid() {
  return (
    <div className="stats-grid">
            {statsData.map((item) => (
              <StatCard key={item.id} {...item} />
            ))}
          </div>
  );
}
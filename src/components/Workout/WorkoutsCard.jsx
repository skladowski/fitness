import { WorkoutItem } from "./WorkoutItem";
import { WorkoutsData } from "../../mocks/WorkoutsData";
import "./WorkOut.css";
import { Link } from "react-router-dom";
export function WorkoutsCard() {
  const recentWorkouts = [...WorkoutsData]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 4);

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Последние тренировки</span>
        <Link to={"/history"} className="see-all-link">
          Все →
        </Link>
      </div>
      <div className="workout-list">
        {recentWorkouts.map((item) => (
          <WorkoutItem
            key={item.id}
            type={item.type}
            metrics={item.metrics}
            timestamp={item.timestamp}
            title={item.title}
            exercises={item.exercises}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

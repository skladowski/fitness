import { WorkoutItem } from "./WorkoutItem";
import "./WorkOut.css";
import { Link } from "react-router-dom";
export function WorkoutsCard({ workouts }) {
  const recentWorkouts = [...workouts];

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

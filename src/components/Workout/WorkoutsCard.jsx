import { WorkoutItem } from "./WorkoutItem";
import { WorkoutsData } from "../../mocks/WorkoutsData";
import './WorkOut.css'
export function WorkoutsCard() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Последние тренировки</span>
        <span className="chip" style={{ color: 'var(--accent2)', borderColor: 'rgba(108,99,255,0.3)' }}>Все →</span>
      </div>

      {WorkoutsData.map((item) => (
        <WorkoutItem key={item.id} {...item} />
      ))}
    </div>
  );
}
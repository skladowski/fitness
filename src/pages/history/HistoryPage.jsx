import { Header } from "../../components/Header/Header";
import { WorkoutItem } from "../../components/Workout/WorkoutItem";
import { WorkoutsData } from "../../mocks/WorkoutsData";
import { DateStrip } from "../../components/DateStrip/DateStrip";
export function HistoryPage() {
  return (
  <div className="main">
    <Header title="История активности" subtitle='абве' />
    <div className="content">
      <DateStrip /> 
      
      <div className="card"> 
        <h3>Журнал тренировок</h3>
        {WorkoutsData.map(workout => (
          <WorkoutItem key={workout.id} {...workout} />
        ))}
      </div>
    </div>
  </div>
)
}
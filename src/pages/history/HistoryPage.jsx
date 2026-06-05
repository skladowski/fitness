import { Header } from "../../components/Header/Header";
import { WorkoutItem } from "../../components/Workout/WorkoutItem";
import { WorkoutsData } from "../../mocks/WorkoutsData";
import { PeriodSelector } from "../../components/PeriodSelector/PeriodSelector";
export function HistoryPage() {
  return (
  <div className="main">
    <Header title="История активности" subtitle='абве' />
    <div className="content">
      <PeriodSelector /> 
      
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
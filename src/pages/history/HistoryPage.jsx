import { Header } from "../../components/Header/Header";
import { StatCard } from "../../components/Stats/StatCard";
import { WorkoutItem } from "../../components/Workout/WorkoutItem";
import { WorkoutsData } from "../../mocks/WorkoutsData";
import { HistoryDataMonth } from "../../mocks/HistoryData"
import { PeriodSelector } from "../../components/PeriodSelector/PeriodSelector";
export function HistoryPage() {
  return (
  <div className="main">
    <Header title="История активности" subtitle='Current day' />
    <div className="content">
      <PeriodSelector /> 
      <div className="stats-grid">
      {HistoryDataMonth.map((item) => (
        <StatCard key={item.id} {...item} variant={'horizontal'} />
      ))}
      </div>
      
      
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
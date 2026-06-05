import { StatsGrid } from '../../components/Stats/StatsGrid.jsx';
import { WorkoutsCard } from '../../components/Workout/WorkoutsCard.jsx';
import { NutritionCard } from '../../components/Nutrition/NutritionCard.jsx';
import { Header } from '../../components/Header/Header.jsx'
import { DateStrip } from '../../components/DateStrip/DateStrip.jsx';

export function DashboardPage() {
  return ( 
      <>
        <Header title="Привет, Илья 👋" subtitle="Вторник, 27 мая 2026" />
        <div className="content">
         <DateStrip />
         <StatsGrid />
          <div className="wide-row">
            <WorkoutsCard />
            <NutritionCard />
          </div>
        </div>
      </>
  )
}
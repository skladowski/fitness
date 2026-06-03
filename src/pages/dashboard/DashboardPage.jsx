import { StatsGrid } from '../../components/StatsGrid.jsx';
import { WorkoutsCard } from '../../components/WorkoutsCard.jsx';
import { NutritionCard } from '../../components/NutritionCard.jsx';
import { Header } from '../../components/Header.jsx';
import { DateStrip } from '../../components/DateStrip.jsx';

export function DashboardPage() {
  return ( 
      <>
        <Header />
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
import { StatsGrid } from "../../components/Stats/StatsGrid.jsx";
import { WorkoutsCard } from "../../components/Workout/WorkoutsCard.jsx";
import { NutritionCard } from "../../components/Nutrition/NutritionCard.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { DateStrip } from "../../components/DateStrip/DateStrip.jsx";
import { getDisplayDate } from "../../utils/formatters.js";
export function DashboardPage() {
  const today = getDisplayDate(new Date());
  return (
    <>
      <Header title="Привет, Илья 👋" subtitle={today} />
      <div className="content">
        <DateStrip />
        <StatsGrid />
        <div className="wide-row">
          <WorkoutsCard />
          <NutritionCard />
        </div>
      </div>
    </>
  );
}

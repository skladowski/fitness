import { StatsGrid } from "../../components/Stats/StatsGrid.jsx";
import { WorkoutsCard } from "../../components/Workout/WorkoutsCard.jsx";
import { NutritionCard } from "../../components/Nutrition/NutritionCard.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { DefaultHeaderActions } from "../../components/Header/DefaultHeaderActions.jsx";
import { getDisplayDate } from "../../utils/formatters.js";
import { statsData } from "../../mocks/StatsData.jsx";
import { WorkoutsData } from "../../mocks/WorkoutsData.jsx";
import { NutritionData } from "../../mocks/NutritionData.jsx";

const TODAY = "2026-07-07";

export function DashboardPage() {
  const today = getDisplayDate(new Date());
  const todayStats =
    statsData.find((element) => element.date === TODAY)?.stats || [];
  const todayWorkouts = WorkoutsData.flatMap((day) => day.workouts)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 4);
  const todayNutrition = NutritionData.find((element) => element.date === TODAY)
    ?.nutrition[0];
  return (
    <>
      <Header title="Привет, Илья 👋" subtitle={today}>
        <DefaultHeaderActions></DefaultHeaderActions>
      </Header>
      <div className="content">
        <StatsGrid stats={todayStats} />
        <div className="wide-row">
          <WorkoutsCard workouts={todayWorkouts} />
          <NutritionCard nutrition={todayNutrition} />
        </div>
      </div>
    </>
  );
}

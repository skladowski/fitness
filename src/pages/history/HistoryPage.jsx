import { Header } from "../../components/Header/Header";
import { StreakCard } from "../../components/Streak/StreakCard";
import { StatCard } from "../../components/Stats/StatCard";
import { WorkoutItem } from "../../components/Workout/WorkoutItem";
import { WorkoutsData } from "../../mocks/WorkoutsData";
import { HistoryDataMonth } from "../../mocks/HistoryData";
import { PeriodSelector } from "../../components/PeriodSelector/PeriodSelector";
import { useState } from "react";
import { activities } from "../../constant/activities";
import "./historyPage.css";
export function HistoryPage() {
  const allWorkouts = WorkoutsData.flatMap((day) => day.workouts).sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
  );
  const [activePeriod, setActivePeriod] = useState("Месяц");

  return (
    <div className="main">
      <Header title="История активности" subtitle="Current day" />
      <div className="content">
        <PeriodSelector
          activePeriod={activePeriod}
          onPeriodChange={setActivePeriod}
        />
        <div className="stats-grid">
          {HistoryDataMonth.map((item) => {
            const activityConfig = activities[item.type];
            const { icon, label } = activityConfig;
            const current = Object.values(item.metrics)[0].current;
            const trendText =
              item.trend > 0 ? `+${item.trend}%` : `${item.trend}%`;
            return (
              <StatCard
                key={item.id}
                variant={"horizontal"}
                value={current}
                icon={icon}
                label={label}
                type={item.type}
                trendText={trendText}
              />
            );
          })}
        </div>
        <div className="history-grid">
          <div className="card">
            <h3>Журнал тренировок</h3>
            {allWorkouts.map((workout) => (
              <WorkoutItem key={workout.id} {...workout} />
            ))}
          </div>
          <StreakCard
            currentStreak={5}
            recordStreak={12}
            weekData={[true, true, false, true, false, false, false]}
          />
        </div>
      </div>
    </div>
  );
}

import { Header } from "../../components/Header/Header";
import { StreakCard } from "../../components/Streak/StreakCard";
import { StatCard } from "../../components/Stats/StatCard";
import { WorkoutItem } from "../../components/Workout/WorkoutItem";
import { WorkoutsData } from "../../mocks/WorkoutsData";
import { HistoryDataYear } from "../../mocks/HistoryDataYear";
import { HistoryData3Month } from "../../mocks/HistoryData3Month";
import { HistoryDataMonth } from "../../mocks/HistoryDataMonth";
import { HistoryDataWeek } from "../../mocks/HistoryDataWeek";
import { HistoryDataDay } from "../../mocks/HistoryDataDay";
import { PeriodSelector } from "../../components/PeriodSelector/PeriodSelector";
import { PersonalRecordCard } from "../../components/PersonalRecord/PersonalRecordCard";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { useState, useMemo } from "react";
import { activities } from "../../constant/activities";
import "./HistoryPage.css";
import { calculateStreak } from "../../utils/formatters";
import { getPersonalRecords } from "../../utils/records";
import { all } from "axios";
const dictionary = {
  День: "день",
  Неделя: "неделю",
  Месяц: "месяц",
  "3 Мес.": "3 мес.",
  Год: "год",
};
const periodDataMap = {
  День: HistoryDataDay,
  Неделя: HistoryDataWeek,
  Месяц: HistoryDataMonth,
  "3 Мес.": HistoryData3Month,
  Год: HistoryDataYear,
};
export function HistoryPage() {
  const allWorkouts = useMemo(() => {
    return WorkoutsData.flatMap((day) => day.workouts).sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
    );
  }, []);
  const [activePeriod, setActivePeriod] = useState("Месяц");
  const [visibleWorkouts, setVisibleWorkouts] = useState(5);

  const streak = calculateStreak(allWorkouts, "2026-07-15");
  const activeStats = periodDataMap[activePeriod] || [];

  const records = getPersonalRecords(allWorkouts);
  return (
    <div className="main">
      <Header title="История активности" subtitle="Current day" />
      <div className="content">
        <PeriodSelector
          activePeriod={activePeriod}
          onPeriodChange={setActivePeriod}
        />
        <div className="stats-grid">
          {activeStats.length === 0 ? (
            <EmptyState />
          ) : (
            activeStats.map((item) => {
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
                  label={`${label} за ${dictionary[activePeriod]}`}
                  type={item.type}
                  trendText={trendText}
                />
              );
            })
          )}
        </div>
        <div className="history-grid">
          <div className="card">
            <h3>Журнал тренировок</h3>
            {allWorkouts.slice(0, visibleWorkouts).map((workout) => (
              <WorkoutItem key={workout.id} {...workout} />
            ))}
            {allWorkouts.length > visibleWorkouts && (
              <button
                className="add-more-button"
                onClick={() => setVisibleWorkouts(visibleWorkouts + 5)}
              >
                {" "}
                Показать еще
              </button>
            )}
          </div>
          <div>
            <StreakCard
              currentStreak={streak}
              recordStreak={12}
              weekData={[true, true, true, true, true, true, false]}
            />
            <PersonalRecordCard records={records} />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Header } from "../../components/Header/Header";
import { DefaultHeaderActions } from "../../components/Header/DefaultHeaderActions";
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
import { Charts } from "../../components/Charts/Charts";
import { PersonalRecordCard } from "../../components/PersonalRecord/PersonalRecordCard";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { useState, useMemo } from "react";
import { activities } from "../../constant/activities";
import "./HistoryPage.css";
import { calculateStreak } from "../../utils/formatters";
import { getPersonalRecords } from "../../utils/records";
import { statsData } from "../../mocks/StatsData";
import { getChartDataByType } from "../../utils/chartAdapters";
import { secondsToHours } from "../../utils/formatters";
const today = new Date().toLocaleDateString("ru-RU", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
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
const periodDaysMap = {
  День: 1,
  Неделя: 7,
  Месяц: 30,
  "3 Мес.": 90,
  Год: 365,
};
const metricConfigMap = {
  Шаги: { type: "STEPS", metricKey: "steps", goal: 7300 },
  Ккал: { type: "CALORIES", metricKey: "burned", goal: 1900 },
  Сон: {
    type: "SLEEP",
    metricKey: "total",
    transform: secondsToHours,
    goal: 8,
  },
};
export function HistoryPage() {
  const allWorkouts = useMemo(() => {
    return WorkoutsData.flatMap((day) => day.workouts).sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
    );
  }, []);
  const [activePeriod, setActivePeriod] = useState("Месяц");
  const [visibleWorkouts, setVisibleWorkouts] = useState(5);
  const [activeMetric, setActiveMetric] = useState("Шаги");
  const streak = calculateStreak(allWorkouts, "2026-07-15");
  const activeStats = periodDataMap[activePeriod] || [];
  const records = useMemo(() => {
    return getPersonalRecords(allWorkouts);
  }, [allWorkouts]);
  const periodStatsData = statsData.slice(0, periodDaysMap[activePeriod]);
  const { type, metricKey, transform, goal } = metricConfigMap[activeMetric];
  const chartData = getChartDataByType(
    periodStatsData,
    type,
    metricKey,
    transform,
  ).reverse();

  return (
    <div className="main">
      <Header title="История активности" subtitle={today}>
        <DefaultHeaderActions />
      </Header>
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
        <div className="history-layout">
          <div className="left-column">
            <Charts
              data={chartData}
              activeMetric={activeMetric}
              onMetricChange={setActiveMetric}
              goal={goal}
            />

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
                  Показать еще
                </button>
              )}
            </div>
          </div>
          <div className="right-column">
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

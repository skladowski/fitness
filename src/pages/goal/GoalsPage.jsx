import "./GoalsPage.css";
import { Goals } from "../../mocks/GoalsData";
import { SummaryCard } from "../../components/Summary/SummaryBar";
import { Header } from "../../components/Header/Header";
import { GoalsHeaderActions } from "../../components/Header/GoalsHeaderActions";
import { GoalCard } from "../../components/Goal/GoalCard";
import { activities } from "../../constant/activities";
import { goalConfig } from "../../constant/goalConfig";
export function GoalsPage() {
  const goalCardsParam = Object.keys(Goals).map((key) => {
    const metricKey = Object.keys(activities[key].metrics)[0];
    return {
      value: Goals[key],
      label: activities[key].label,
      icon: activities[key].icon,
      color: activities[key].color,
      type: key,
      unit: activities[key].metrics[metricKey].unit,
      min: goalConfig[key].slider.min,
      max: goalConfig[key].slider.max,
      presets: goalConfig[key].presets,
    };
  });
  return (
    <>
      <Header
        title={"Цели"}
        subtitle={
          "Настройте дневные и недельные показатели — они появятся на дашборде"
        }
      >
        <GoalsHeaderActions></GoalsHeaderActions>
      </Header>
      <SummaryCard goals={Goals}></SummaryCard>
      <div className="goals-grid">
        {goalCardsParam.map((item) => {
          return <GoalCard key={item.type} {...item} />;
        })}
      </div>
    </>
  );
}

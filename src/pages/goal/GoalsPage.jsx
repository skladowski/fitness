import "./GoalsPage.css";
import { Goals } from "../../mocks/GoalsData";
import { SummaryCard } from "../../components/Summary/SummaryBar";
import { Header } from "../../components/Header/Header";
import { GoalsHeaderActions } from "../../components/Header/GoalsHeaderActions";
import { GoalCard } from "../../components/Goal/GoalCard";
import { activities } from "../../constant/activities";
import { goalConfig } from "../../constant/goalConfig";
import { useState, useContext } from "react";
import { goalContext } from "../../context/goalContext";
export function GoalsPage() {
  const { goal, setGoal } = useContext(goalContext);
  const [draftGoals, setDraftGoals] = useState(goal);
  function handleGoalChange(type, newValue) {
    setDraftGoals({ ...draftGoals, [type]: newValue });
  }
  const goalCardsParam = Object.keys(draftGoals).map((key) => {
    const metricKey = Object.keys(activities[key].metrics)[0];
    return {
      value: draftGoals[key],
      label: activities[key].label,
      icon: activities[key].icon,
      color: activities[key].color,
      textColor: activities[key].textColor,
      type: key,
      unit: activities[key].metrics[metricKey].unit,
      min: goalConfig[key].slider.min,
      max: goalConfig[key].slider.max,
      step: goalConfig[key].slider.step,
      presets: goalConfig[key].presets,
    };
  });
  function handleSave() {
    setGoal(draftGoals);
    localStorage.setItem("goals", JSON.stringify(draftGoals));
  }
  function handleReset() {
    setDraftGoals(Goals);
  }
  return (
    <div className="main">
      <Header
        title={"Цели"}
        subtitle={
          "Настройте дневные и недельные показатели — они появятся на дашборде"
        }
      >
        <GoalsHeaderActions
          handleSave={handleSave}
          handleReset={handleReset}
        ></GoalsHeaderActions>
      </Header>
      <div className="content">
        <SummaryCard goals={draftGoals}></SummaryCard>
        <div className="goals-grid">
          {goalCardsParam.map((item) => {
            return (
              <GoalCard
                onGoalChange={handleGoalChange}
                key={item.type}
                {...item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

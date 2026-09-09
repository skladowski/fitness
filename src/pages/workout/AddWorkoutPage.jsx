import { useState } from "react";
import { CategoryPicker } from "../../components/AddWorkout/CategoryPicker/CategoryPicker";
import { PowerLogger } from "../../components/AddWorkout/PowerLogger/PowerLogger";
import { YogaLogger } from "../../components/AddWorkout/YogaLogger/YogaLogger";
import { CyclingLogger } from "../../components/AddWorkout/CyclingLogger/CyclingLogger";
import { RunLogger } from "../../components/AddWorkout/RunLogger/RunLogger";
import { LoggerHeader } from "../../components/AddWorkout/LoggerHeader/LoggerHeader";
import { LoggerActionBar } from "../../components/AddWorkout/LoggerActionBar/LoggerActionBar";
export function AddWorkoutPage() {
  const [stage, setStage] = useState("picker");
  const [workoutType, setWorkoutType] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  function handleSelect(type) {
    setWorkoutType(type);
    setStage("logging");
  }
  function handleFinish() {
    setIsPaused(true);
    setStage("summary");
  }
  let activeLogger;
  if (workoutType === "POWER") {
    activeLogger = <PowerLogger />;
  } else if (workoutType === "YOGA") {
    activeLogger = <YogaLogger />;
  } else if (workoutType === "CYCLING") {
    activeLogger = <CyclingLogger />;
  } else if (workoutType === "RUN") {
    activeLogger = <RunLogger />;
  }
  return (
    <>
      {stage === "picker" && <CategoryPicker onSelect={handleSelect} />}
      {stage === "logging" && (
        <>
          <LoggerHeader /> {activeLogger} <LoggerActionBar />{" "}
        </>
      )}
      {stage === "summary" && <div>Итог</div>}
    </>
  );
}

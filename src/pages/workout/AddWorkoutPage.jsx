import { useState, useEffect } from "react";
import { CategoryPicker } from "../../components/AddWorkout/CategoryPicker/CategoryPicker";
import { PowerLogger } from "../../components/AddWorkout/PowerLogger/PowerLogger";
import { YogaLogger } from "../../components/AddWorkout/YogaLogger/YogaLogger";
import { CyclingLogger } from "../../components/AddWorkout/CyclingLogger/CyclingLogger";
import { RunLogger } from "../../components/AddWorkout/RunLogger/RunLogger";
import { WorkoutSummary } from "../../components/AddWorkout/WorkoutSummary/WorkoutSummary";
import { LoggerHeader } from "../../components/AddWorkout/LoggerHeader/LoggerHeader";
import { LoggerActionBar } from "../../components/AddWorkout/LoggerActionBar/LoggerActionBar";
export function AddWorkoutPage() {
  const [stage, setStage] = useState("picker");
  const [workoutType, setWorkoutType] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [sessionDetails, setSessionDetails] = useState({});
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
    activeLogger = (
      <YogaLogger
        sessionDetails={sessionDetails}
        onChange={handleSessionDetailChange}
      />
    );
  } else if (workoutType === "CYCLING") {
    activeLogger = (
      <CyclingLogger
        sessionDetails={sessionDetails}
        onChange={handleSessionDetailChange}
      />
    );
  } else if (workoutType === "RUN") {
    activeLogger = (
      <RunLogger
        sessionDetails={sessionDetails}
        onChange={handleSessionDetailChange}
      />
    );
  }

  function handlePauseToggle() {
    setIsPaused(!isPaused);
  }

  function handleSessionDetailChange(key, value) {
    setSessionDetails({
      ...sessionDetails,
      [key]: value,
    });
  }

  const checkStage = stage === "logging";

  useEffect(() => {
    let timerId;
    if (checkStage) {
      timerId = setInterval(() => {
        setTimer((prev) => prev + 1);
        console.log(timerId);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [checkStage]);

  return (
    <>
      {stage === "picker" && <CategoryPicker onSelect={handleSelect} />}
      {stage === "logging" && (
        <>
          <LoggerHeader
            onPauseToggle={handlePauseToggle}
            isPaused={isPaused}
            timer={timer}
            workoutType={workoutType}
          />
          {activeLogger}
          <LoggerActionBar onFinish={handleFinish} />
        </>
      )}
      {stage === "summary" && <WorkoutSummary />}
    </>
  );
}

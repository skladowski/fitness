import { useState, useEffect, useContext } from "react";
import { CategoryPicker } from "../../components/AddWorkout/CategoryPicker/CategoryPicker";
import { PowerLogger } from "../../components/AddWorkout/PowerLogger/PowerLogger";
import { YogaLogger } from "../../components/AddWorkout/YogaLogger/YogaLogger";
import { CyclingLogger } from "../../components/AddWorkout/CyclingLogger/CyclingLogger";
import { RunLogger } from "../../components/AddWorkout/RunLogger/RunLogger";
import { WorkoutSummary } from "../../components/AddWorkout/WorkoutSummary/WorkoutSummary";
import { LoggerHeader } from "../../components/AddWorkout/LoggerHeader/LoggerHeader";
import { LoggerActionBar } from "../../components/AddWorkout/LoggerActionBar/LoggerActionBar";
import { calculateTotalTonnage } from "../../utils/formatters";
import {
  calculateTDEE,
  calculateWorkoutCalories,
} from "../../utils/healthMath";
import { profileContext } from "../../context/ProfileContext";
import { calculateAge } from "../../utils/healthMath";
import { workoutContext } from "../../context/WorkoutContext";
import { activities } from "../../constant/activities";
export function AddWorkoutPage() {
  const { workoutHistory, setWorkoutHistory, addWorkout } =
    useContext(workoutContext);
  const [stage, setStage] = useState("picker");
  const [workoutType, setWorkoutType] = useState(null);
  const [exercises, setExercises] = useState([
    {
      name: "Жим лёжа",
      subtitle: "Штанга · грудь",
      id: "uud12",
      sets: [
        { id: "uud1", weight: 60, reps: 10, isChecked: true },
        { id: "uud2", weight: 60, reps: 15, isChecked: false },
      ],
    },
    {
      name: "Тяга верхнего блока",
      subtitle: "Тренажёр · спина",
      id: "uud22",
      sets: [
        { id: "uud21", weight: 80, reps: 10, isChecked: true },
        { id: "uud221", weight: 90, reps: 15, isChecked: false },
        { id: "uud23", weight: 95, reps: 7, isChecked: false },
      ],
    },
    {
      name: "Приседания",
      subtitle: "Гантели · ягодицы",
      id: "uud32",
      sets: [
        { id: "uud31", weight: 120, reps: 10, isChecked: true },
        { id: "uud32", weight: 100, reps: 15, isChecked: false },
        { id: "uud33", weight: 95, reps: 7, isChecked: false },
      ],
    },
  ]);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [sessionDetails, setSessionDetails] = useState({});

  const { profile } = useContext(profileContext);
  const age = calculateAge(profile.personalInfo.birthDate);
  const tdee = calculateTDEE(
    profile.bodyMetrics.weight,
    profile.bodyMetrics.height,
    age,
    profile.bodyMetrics.levelActivity,
    profile.personalInfo.gender,
  );
  const workoutCalories = calculateWorkoutCalories(tdee.tdee, timer);

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
    activeLogger = (
      <PowerLogger
        onChange={handleSetChange}
        exercises={exercises}
        addSet={handleAddSet}
      />
    );
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
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [checkStage]);

  function handleSetChange(exerciseId, setRowId, field, value) {
    const change = exercises.map((item) => {
      if (item.id === exerciseId) {
        return {
          ...item,
          sets: item.sets.map((set) => {
            if (set.id === setRowId) {
              return { ...set, [field]: value };
            } else {
              return set;
            }
          }),
        };
      } else {
        return item;
      }
    });
    setExercises(change);
  }

  function handleAddSet(exerciseId) {
    const addSet = exercises.map((item) => {
      if (item.id === exerciseId) {
        return {
          ...item,
          sets: [
            ...item.sets,
            { id: crypto.randomUUID(), weight: "", reps: "", isChecked: false },
          ],
        };
      } else return { ...item };
    });
    setExercises(addSet);
  }
  const totalTonnage = calculateTotalTonnage(exercises);

  function handleNewWorkout() {
    let specificMetrics;
    if (workoutType === "RUN") {
      specificMetrics = {
        distance: { current: sessionDetails.distance, target: null },
        pace: { current: sessionDetails.pace, target: null },
      };
    } else if (workoutType === "CYCLING") {
      specificMetrics = {
        distance: { current: sessionDetails.distance, target: null },
        avgSpeed: { current: sessionDetails.speed, target: null },
        cadence: { current: sessionDetails.cadence, target: null },
        elevation: { current: sessionDetails.elevation, target: null },
      };
    } else if (workoutType === "YOGA") {
      specificMetrics = {
        note: { current: sessionDetails.note, target: null },
      };
    }
    let extraFields;
    if (workoutType === "POWER") {
      extraFields = { exercises };
    }
    const newWorkout = {
      id: crypto.randomUUID(),
      type: workoutType,
      title: activities[workoutType].label,
      timestamp: new Date().toISOString(),
      metrics: {
        duration: {
          current: timer,
          target: workoutType === "YOGA" ? sessionDetails.time : null,
        },
        burnedKcal: { current: Math.round(workoutCalories), target: null },
        ...specificMetrics,
      },
      ...extraFields,
    };
    addWorkout(newWorkout);
  }

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
      {stage === "summary" && (
        <WorkoutSummary
          timer={timer}
          tonnage={totalTonnage}
          workoutCalories={workoutCalories}
          workoutType={workoutType}
          onSave={handleNewWorkout}
        />
      )}
    </>
  );
}

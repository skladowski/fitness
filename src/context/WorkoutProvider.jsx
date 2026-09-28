import { workoutContext } from "./WorkoutContext";
import { useState } from "react";
import { WorkoutsData } from "../mocks/WorkoutsData";

export function WorkoutProvider({ children }) {
  const [workoutHistory, setWorkoutHistory] = useState(() => {
    const saved = localStorage.getItem("workout");
    return saved ? JSON.parse(saved) : WorkoutsData;
  });

  function addWorkout(newWorkout) {
    const today = new Date().toISOString().slice(0, 10);
    const todaysWorkout = workoutHistory.find((day) => {
      return day.date === today;
    });

    let updatedWorkoutHistory;
    if (todaysWorkout) {
      updatedWorkoutHistory = workoutHistory.map((item) => {
        return item.date === today
          ? { ...item, workouts: [...item.workouts, newWorkout] }
          : item;
      });
    } else {
      updatedWorkoutHistory = [
        { date: today, workouts: [newWorkout] },
        ...workoutHistory,
      ];
    }
    localStorage.setItem("workout", JSON.stringify(updatedWorkoutHistory));
    setWorkoutHistory(updatedWorkoutHistory);
  }
  return (
    <workoutContext.Provider
      value={{ workoutHistory, setWorkoutHistory, addWorkout }}
    >
      {children}
    </workoutContext.Provider>
  );
}

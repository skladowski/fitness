import { metersToKilometers } from "./formatters";
import { WorkoutEntity } from "../types/workout";
function calculateVolume(workout: WorkoutEntity) {
  if (workout.type !== "POWER" || !workout.exercises) return 0;
  return workout.exercises.reduce((total, exercise) => {
    return (
      total +
      exercise.sets.reduce(
        (subTotal, set) => subTotal + Number(set.weight) * Number(set.reps),
        0,
      )
    );
  }, 0);
}

function findMaxWorkout(
  workouts: WorkoutEntity[],
  {
    filterFn,
    getValueFn,
    unit,
    title,
  }: {
    filterFn: (w: WorkoutEntity) => boolean;
    getValueFn: (w: WorkoutEntity) => number;
    unit: string;
    title: string;
  },
) {
  const filtered = workouts.filter(filterFn);

  if (filtered.length === 0) return null;

  const record = filtered.reduce((best, current) => {
    return getValueFn(current) > getValueFn(best) ? current : best;
  }, filtered[0]);
  const rawValue = getValueFn(record);
  const formattedValue =
    typeof rawValue === "number" ? Number(rawValue.toFixed(1)) : rawValue;

  return {
    type: record.type,
    title: title,
    value: formattedValue,
    unit: unit,
    date: new Date(record.timestamp).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  };
}

function findMaxByDistance(workouts: WorkoutEntity[], type: string) {
  return findMaxWorkout(workouts, {
    filterFn: (w) => w.type === type,
    getValueFn: (w) => w.metrics.distance.current,
    title: "· макс. дистанция",
    unit: "км",
  });
}

function findMaxByVolume(workouts: WorkoutEntity[]) {
  return findMaxWorkout(workouts, {
    filterFn: (w) => w.type === "POWER",
    getValueFn: (w) => calculateVolume(w),
    title: "· макс. тоннаж",
    unit: "кг",
  });
}

export function getPersonalRecords(workouts: WorkoutEntity[]) {
  if (!workouts || workouts.length === 0) return [];

  const runRecord = findMaxByDistance(workouts, "RUN");
  if (runRecord) runRecord.value = Number(metersToKilometers(runRecord.value));

  const cyclingRecord = findMaxByDistance(workouts, "CYCLING");
  if (cyclingRecord)
    cyclingRecord.value = Number(metersToKilometers(cyclingRecord.value));

  const powerRecord = findMaxByVolume(workouts);

  const records = [runRecord, cyclingRecord, powerRecord];
  return records.filter(Boolean);
}

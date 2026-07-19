import { metersToKilometers } from "./formatters";

function calculateVolume(workout) {
  if (workout.type !== "POWER") return 0;
  return workout.exercises.reduce((total, exercise) => {
    return (
      total +
      exercise.sets.reduce(
        (subTotal, set) => subTotal + set.weight * set.reps,
        0,
      )
    );
  }, 0);
}

function findMaxWorkout(workouts, { filterFn, getValueFn, unit, title }) {
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

function findMaxByDistance(workouts, type) {
  return findMaxWorkout(workouts, {
    filterFn: (w) => w.type === type,
    getValueFn: (w) => w.metrics.distance.current,
    title: "· макс. дистанция",
    unit: "км",
  });
}

function findMaxByVolume(workouts) {
  return findMaxWorkout(workouts, {
    filterFn: (w) => w.type === "POWER",
    getValueFn: (w) => calculateVolume(w),
    title: "· макс. тоннаж",
    unit: "кг",
  });
}

export function getPersonalRecords(workouts) {
  if (!workouts || workouts.length === 0) return [];

  const runRecord = findMaxByDistance(workouts, "RUN");
  if (runRecord) runRecord.value = metersToKilometers(runRecord.value);

  const cyclingRecord = findMaxByDistance(workouts, "CYCLING");
  if (cyclingRecord)
    cyclingRecord.value = metersToKilometers(cyclingRecord.value);

  const powerRecord = findMaxByVolume(workouts);

  const records = [runRecord, cyclingRecord, powerRecord];
  return records.filter(Boolean);
}

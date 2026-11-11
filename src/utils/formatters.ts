import {
  WorkoutEntity,
  ExerciseEntity,
  ExerciseSetEntity,
} from "../types/workout";
export function secondsToMinutes(val: number) {
  return Math.floor(val / 60);
}
export function secondsToHours(val: number) {
  return Math.floor(val / 3600);
}

export function metersToKilometers(val: number) {
  return (val / 1000).toFixed(1);
}

export function getDisplayDate(date: Date) {
  let dateString = new Date(date).toLocaleString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",

    year: "numeric",
  });
  return dateString.charAt(0).toUpperCase() + dateString.slice(1);
}
export function calculateStreak(
  workouts: WorkoutEntity[],
  anchorDate: Date | string = new Date(),
) {
  const uniqueDatesRaw = workouts.map((trainingObject) => {
    const date = new Date(trainingObject.timestamp);
    return date.toDateString(); // новый массив строк-дат, где могут быть повторы
  });
  const uniqueDates = [...new Set(uniqueDatesRaw)]; // убираем дубликаты и возвращаем в обычный массив
  uniqueDates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime()); // сортируем по дате новизне
  const today = new Date(anchorDate); // создаем сегодняшнюю дату
  let streak = 0;

  for (let i = 0; i < uniqueDates.length; i++) {
    const expectedDate = new Date(today); // Создаем копию сегодняшней даты
    expectedDate.setDate(today.getDate() - i); // сдивгается на 1 день
    const expectedDateString = expectedDate.toDateString(); // возвращаем строку как в uniqueDatesRaw
    if (uniqueDates.includes(expectedDateString)) {
      // проверяем содержится ли в уникальный датах наша ожидаемая дата,
      streak++;
    } else {
      break;
    }
  }
  return streak;
}
export function lastOneNumber(param: number) {
  return param % 10;
}
export function lastTwoNumbers(param: number) {
  return param % 100;
}
export function getWordForm(
  count: number,
  one: string,
  few: string,
  many: string,
) {
  if ([11, 12, 13, 14].includes(lastTwoNumbers(count))) {
    return many;
  } else if (lastOneNumber(count) === 1) {
    return one;
  } else if ([2, 3, 4].includes(lastOneNumber(count))) {
    return few;
  } else {
    return many;
  }
}
export function getMonthSince(startDate: string) {
  const nowYear = new Date().getFullYear();
  const startYear = new Date(startDate).getFullYear();
  const nowMonth = new Date().getMonth();
  const startMonth = new Date(startDate).getMonth();
  return (nowYear - startYear) * 12 + (nowMonth - startMonth);
}

export function calculateTotalTonnage(exercises: ExerciseEntity[]) {
  const sets = exercises.flatMap((ex) => ex.sets);
  return sets.reduce((acc, set) => {
    return Number(set.reps) * Number(set.weight) + acc;
  }, 0);
}

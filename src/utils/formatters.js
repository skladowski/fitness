export function secondsToMinutes(val) {
  return Math.floor(val / 60);
}
export function secondsToHours(val) {
  return Math.floor(val / 3600);
}

export function metersToKilometers(val) {
  return (val / 1000).toFixed(1);
}

export function getDisplayDate(date) {
  let dateString = new Date(date).toLocaleString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

export function calculateStreak(workouts, anchorDate = new Date()) {
  const uniqueDatesRaw = workouts.map((trainingObject) => {
    const date = new Date(trainingObject.timestamp);
    return date.toDateString(); // новый массив строк-дат, где могут быть повторы
  });
  const uniqueDates = [...new Set(uniqueDatesRaw)]; // убираем дубликаты и возвращаем в обычный массив
  uniqueDates.sort((a, b) => new Date(b) - new Date(a)); // сортируем по дате новизне
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

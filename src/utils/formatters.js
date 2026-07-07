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

export function formatRelativeDate(timestamp) {
  const date = new Date(timestamp);
  const currentDate = new Date();
  const differenceDate = (currentDate - date) / (1000 * 60 * 60 * 24);
  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1);
  let label;
  if (date.toDateString() === currentDate.toDateString()) {
    label = "Сегодня";
  } else if (date.toDateString() === yesterday.toDateString()) {
    label = "Вчера";
  } else if (differenceDate < 7) {
    label = date.toLocaleDateString("ru-RU", { weekday: "long" });
  } else {
    label = date.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  }
  return `${label} ${date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

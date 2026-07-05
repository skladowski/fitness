export const formatDuration = (seconds) => {
  const remainingSeconds = seconds % 60;
  const hours = Math.floor(seconds / 3600);
  const remainingMinutes = Math.floor((seconds % 3600) / 60);
  const paddedSeconds = String(remainingSeconds).padStart(2, "0");
  const paddedMinutes = String(remainingMinutes).padStart(2, "0");
  return `${hours ? `${hours}:` : ""}${paddedMinutes}:${paddedSeconds}`;
};

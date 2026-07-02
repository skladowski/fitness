export const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const paddedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${minutes}:${paddedSeconds}`;
};

import { ActivityLevel } from "../types/profile";
type ActivityLevelEntity = {
  key: ActivityLevel;
  label: string;
  sub: string;
};
export const ACTIVITY_LEVELS: ActivityLevelEntity[] = [
  {
    key: "Sedentary",
    label: "Низкая",
    sub: "Малоподвижный образ жизни, редкие тренировки",
  },
  {
    key: "Moderate",
    label: "Средняя",
    sub: "Тренировки 3-5 раз в неделю",
  },
  {
    key: "Active",
    label: "Высокая",
    sub: "Интенсивные тренировки 6-7 раз в неделю",
  },
];

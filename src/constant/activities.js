import { secondsToHours } from "../utils/formatters";
import { secondsToMinutes } from "../utils/formatters";
import { metersToKilometers } from "../utils/formatters";

export const activities = {
  RUN: {
    label: "Бег",
    icon: "🏃",
    color: "rgba(74, 65, 241, 0.12)",
    metrics: {
      distance: {
        label: "Дистанция",
        unit: "км",
        transform: metersToKilometers,
      },
      duration: {
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
    },
  },
  POWER: {
    label: "Силовая тренировка",
    icon: "🏋️",
    color: "rgba(31, 141, 113, 0.1)",
    metrics: {
      duration: {
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
    },
  },
  CYCLING: {
    label: "Велоезда",
    icon: "🚴",
    color: "rgba(29, 119, 158, 0.1)",
    metrics: {
      distance: {
        label: "Дистанция",
        unit: "км",
        transform: metersToKilometers,
      },
      duration: {
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
    },
  },
  YOGA: {
    label: "Йога",
    icon: "🧘",
    color: "rgba(251,191,36,0.1)",
    metrics: {
      duration: {
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
    },
  },
  CALORIES: {
    label: "Калории",
    icon: "🔥",
    color: "#fb923c",
    metrics: {
      burned: { label: "Сожжено", unit: "Ккал" },
    },
  },
  WALK: {
    label: "Шаги за день",
    icon: "🚶",
    color: "rgba(124, 118, 238, 0.12)",
    metrics: {
      distance: {
        label: "Дистанция",
        unit: "км",
        transform: metersToKilometers,
      },
      duration: {
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
    },
  },
  NUTRITION: {
    label: "Питание",
    metrics: {
      calories: { label: "Калории", unit: "ккал" },
      protein: { label: "Белки", color: "#38bdf8", unit: "г" },
      carbs: { label: "Углеводы", color: "#fbbf24", unit: "г" },
      fat: { label: "Жиры", color: "#34d399", unit: "г" },
    },
  },
  STEPS: {
    label: "Шаги за день",
    icon: "🚶",
    color: "rgba(124, 118, 238, 0.12)",
    metrics: {
      steps: { label: "Шаги", unit: "шагов" },
      duration: {
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
    },
  },
  SLEEP: {
    label: "Сон",
    icon: "😴",
    color: "rgba(0,0,0,0.1)",
    metrics: {
      total: {
        label: "Сна",
        unit: " Часов",
        transform: secondsToHours,
      },
    },
  },
  ACTIVE_MINUTES: {
    label: "Активные минуты ",
    icon: "⚡",
    showRatio: true,
    color: "rgba(0,0,0,0.1)",
    metrics: {
      active: {
        label: "Активных",
        unit: "Минут",
        transform: secondsToMinutes,
      },
    },
  },
  TRAINING_COUNT: {
    label: "Тренировки",
    icon: "📅",
    color: "rgba(0,0,0,0.1)",
    metrics: {
      number: { label: "Сессий", unit: "тр." },
    },
  },
};

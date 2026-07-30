import { secondsToHours } from "../utils/formatters";
import { secondsToMinutes } from "../utils/formatters";
import { metersToKilometers } from "../utils/formatters";

export const activities = {
  RUN: {
    label: "Бег",
    icon: "🏃",
    color: "rgba(182, 179, 240, 0.1)",
    metrics: {
      distance: {
        label: "Дистанция",
        unit: "км",
        transform: metersToKilometers,
      },
      duration: {
        isPrimary: true,
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
      burnedKcal: {
        isPrimary: true,
        label: "Калории",
        unit: "ккал",
        transform: "",
      },
      heartRate: { label: "Пульс", unit: "уд/мин" },
    },
  },
  POWER: {
    label: "Силовая тренировка",
    icon: "🏋️",
    color: "rgba(31, 141, 113, 0.1)",
    metrics: {
      duration: {
        isPrimary: true,
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
      burnedKcal: {
        isPrimary: true,
        label: "Калории",
        unit: "ккал",
        transform: "",
      },
      exercisesCount: {
        label: "Упражнений",
        unit: "упр.",
      },
      totalVolume: {
        label: "Объем",
        unit: "кг тоннажа",
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
        isPrimary: true,
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
      avgSpeed: {
        label: "Среднее значение",
        unit: "км/ч",
      },
    },
  },
  YOGA: {
    label: "Йога",
    icon: "🧘",
    color: "rgba(251,191,36,0.1)",
    metrics: {
      duration: {
        isPrimary: true,
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
      burned: { label: "Сожжено", unit: "ккал" },
    },
  },
  WALK: {
    label: "Шаги",
    icon: "🚶",
    color: "rgba(124, 118, 238, 0.1)",
    metrics: {
      distance: {
        label: "Дистанция",
        unit: "км",
        transform: metersToKilometers,
      },
      duration: {
        isPrimary: true,
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
    label: "Шаги",
    icon: "🚶",
    color: "rgba(124, 118, 238, 0.1)",
    metrics: {
      steps: { label: "Шаги", unit: "шагов" },
      duration: {
        isPrimary: true,
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
    },
  },
  SLEEP: {
    label: "Сон",
    icon: "😴",
    color: "rgba(56,189,248,0.15)",
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
    color: "rgba(11, 165, 127, 0.47)",
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

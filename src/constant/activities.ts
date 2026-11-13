import { secondsToHours } from "../utils/formatters";
import { secondsToMinutes } from "../utils/formatters";
import { metersToKilometers } from "../utils/formatters";

type ActivityConfigEntity = {
  metrics: ActivityMetrics;
  label: string;
  icon?: string;
  color?: string;
  textColor?: string;
  showRatio?: boolean;
  isSport?: boolean;
};

type MetricConfigEntity = {
  isPrimary?: boolean;
  color?: string;
  label: string;
  unit: string;
  transform?: (val: number) => string | number;
};
type ActivityMetrics = Record<string, MetricConfigEntity>;

export const activities: Record<string, ActivityConfigEntity> = {
  RUN: {
    isSport: true,
    label: "Бег",
    icon: "🏃",
    color: "rgba(108,99,255,0.14)",
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
      },
      heartRate: { label: "Пульс", unit: "уд/мин" },
    },
  },
  POWER: {
    isSport: true,
    label: "Силовая тренировка",
    icon: "🏋️",
    color: "rgba(251,146,60,0.16)",
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
    isSport: true,
    label: "Велоезда",
    icon: "🚴",
    color: "rgba(56,189,248,0.14)",
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
    isSport: true,
    label: "Йога",
    icon: "🧘",
    color: "rgba(34,211,168,0.14)",
    metrics: {
      duration: {
        isPrimary: true,
        label: "Время",
        unit: "мин",
        transform: secondsToMinutes,
      },
    },
  },
  SWIMMING: {
    isSport: true,
    label: "Плавание",
    icon: "🏊",
    color: "rgba(74, 237, 248, 0.1)",
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
    color: "rgba(249,115,22,0.15)",
    textColor: "rgba(249,115,22, 1)",
    metrics: {
      burned: { label: "Сожжено", unit: "ккал" },
    },
  },
  WALK: {
    label: "Шаги",
    icon: "🚶",
    color: "rgba(124, 118, 238, 0.1)",
    textColor: "rgba(124, 118, 238, 1)",
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
    textColor: "rgba(124, 118, 238, 1)",
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
    textColor: "rgba(56,189,248,1)",
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
    textColor: "rgba(11, 165, 127, 1)",
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

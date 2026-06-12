export const activities = {
  RUN: {
    label: "Бег",
    icon: "🏃",
    color: "rgba(74, 65, 241, 0.12)",
    metrics: {
      distance: { label: "Дистанция", unit: "км" },
      duration: { label: "Время", unit: "мин" },
    },
  },
  POWER: {
    label: "Силовая тренировка",
    icon: "🏋️",
    color: "rgba(31, 141, 113, 0.1)",
    metrics: {
      duration: { label: "Время", unit: "мин" },
    },
  },
  CYCLING: {
    label: "Велоезда",
    icon: "🚴",
    color: "rgba(29, 119, 158, 0.1)",
    metrics: {
      distance: { label: "Дистанция", unit: "км" },
      duration: { label: "Время", unit: "мин" },
    },
  },
  YOGA: {
    label: "Йога",
    icon: "🧘",
    color: "rgba(251,191,36,0.1)",
    metrics: {
      duration: { label: "Время", unit: "мин" },
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
      distance: { label: "Дистанция", unit: "км" },
      duration: { label: "Время", unit: "мин" },
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
      duration: { label: "Время", unit: "мин" },
    },
  },
  SLEEP: {
    label: "Сон",
    icon: "😴",
    color: "rgba(0,0,0,0.1)",
    metrics: {
      total: { label: "Сна", unit: " Часов" },
    },
  },
  ACTIVE_MINUTES: {
    label: "Активные минуты ",
    icon: "⚡",
    color: "rgba(0,0,0,0.1)",
    metrics: {
      active: { label: "Активных", unit: "Минут" },
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

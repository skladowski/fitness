export const goalConfig = {
  STEPS: {
    slider: {
      min: 2000,
      max: 25000,
      step: 500,
    },
    presets: [
      {
        label: "6000",
        value: 6000,
      },
      {
        label: "10000",
        value: 10000,
      },
      {
        label: "12500",
        value: 12500,
      },
      {
        label: "15000",
        value: 15000,
      },
    ],
  },
  CALORIES: {
    slider: {
      min: 1200,
      max: 4000,
      step: 50,
    },
    presets: [
      {
        label: "Похудение",
        value: 1800,
      },
      {
        label: "Норма",
        value: 2400,
      },
      {
        label: "Набор Массы",
        value: 2900,
      },
    ],
  },
  ACTIVE_MINUTES: {
    slider: {
      min: 10,
      max: 180,
      step: 5,
    },
    presets: [
      {
        label: "30",
        value: 30,
      },
      {
        label: "45",
        value: 45,
      },
      {
        label: "60",
        value: 60,
      },
      {
        label: "90",
        value: 90,
      },
    ],
  },
  SLEEP: {
    slider: {
      min: 5,
      max: 10,
      step: 0.5,
    },
    presets: [
      {
        label: "7 ч",
        value: 7,
      },
      {
        label: "8 ч",
        value: 8,
      },
      {
        label: "9 ч",
        value: 9,
      },
    ],
  },
};

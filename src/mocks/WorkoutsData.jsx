export const WorkoutsData = [
  {
    id: "uuid-1",
    type: "RUN",
    title: "Пробежка",
    metrics: {
      burnedKcal: { current: 320, target: null },
      duration: { current: 1934, target: null },
    },
  },
  {
    id: "uuid-2",
    type: "POWER",
    exercises: [
      {
        id: "uuid-21",
        name: "Жим гантелей",
        sets: [
          {
            id: "uuid-211",
            weight: 20,
            reps: 10,
          },
        ],
      },
      {
        id: "uuid-22",
        name: "Брусья",
        sets: [
          {
            id: "uuid-221",
            weight: 25,
            reps: 10,
          },
        ],
      },
    ],
    title: "Силовая Тренировка",
    metrics: {
      burnedKcal: { current: 185, target: null },
      duration: { current: 2880, target: null },
    },
  },

  {
    id: "uuid-3",
    type: "CYCLING",
    title: "Велоезда",
    metrics: {
      burnedKcal: { current: 410, target: null },
      duration: { current: 3720, target: null },
    },
  },
  {
    id: "uuid-4",
    type: "YOGA",
    title: "Йога",
    metrics: {
      burnedKcal: { current: 85, target: null },
      duration: { current: 1800, target: null },
    },
  },
];

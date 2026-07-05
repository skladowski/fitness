export const WorkoutsData = [
  {
    id: "uuid-1",
    type: "RUN",
    title: "Пробежка",
    timestamp: "2026-02-03T14:30:00Z",
    metrics: {
      distance: { current: 5400, target: null },
      heartRate: { current: 142, target: null },
      burnedKcal: { current: 320, target: null },
      duration: { current: 1934, target: null },
    },
  },
  {
    id: "uuid-2",
    type: "POWER",
    timestamp: "2026-07-02T14:30:00Z",
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
    timestamp: "2026-07-01T11:30:00Z",
    title: "Велоезда",
    metrics: {
      avgSpeed: { current: 23, target: null },
      distance: { current: 5400, target: null },
      burnedKcal: { current: 410, target: null },
      duration: { current: 3720, target: null },
    },
  },
  {
    id: "uuid-4",
    type: "YOGA",
    title: "Йога",
    description: "Растяжка и восстановление",
    timestamp: "2026-06-29T16:35:00Z",
    metrics: {
      burnedKcal: { current: 85, target: null },
      duration: { current: 1800, target: null },
    },
  },
];

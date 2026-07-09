export const WorkoutsData = [
  {
    date: "2026-07-07",
    workouts: [
      {
        id: "w-07-1",
        type: "RUN",
        title: "Утренняя пробежка",
        timestamp: "2026-07-07T08:30:00Z",
        metrics: {
          distance: { current: 5400, target: null },
          heartRate: { current: 142, target: null },
          burnedKcal: { current: 320, target: null },
          duration: { current: 1934, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-06",
    workouts: [
      {
        id: "w-06-1",
        type: "POWER",
        title: "Силовая Тренировка",
        timestamp: "2026-07-06T18:00:00Z",
        exercises: [
          {
            id: "ex-06-11",
            name: "Жим гантелей",
            sets: [{ id: "s-06-111", weight: 20, reps: 10 }],
          },
          {
            id: "ex-06-12",
            name: "Брусья",
            sets: [{ id: "s-06-121", weight: 25, reps: 10 }],
          },
        ],
        metrics: {
          burnedKcal: { current: 185, target: null },
          duration: { current: 2880, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-05",
    workouts: [
      {
        id: "w-05-1",
        type: "YOGA",
        title: "Йога",
        description: "Растяжка и восстановление",
        timestamp: "2026-07-05T10:00:00Z",
        metrics: {
          burnedKcal: { current: 85, target: null },
          duration: { current: 1800, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-04",
    workouts: [
      {
        id: "w-04-1",
        type: "CYCLING",
        title: "Велоезда",
        timestamp: "2026-07-04T12:00:00Z",
        metrics: {
          avgSpeed: { current: 23, target: null },
          distance: { current: 12000, target: null },
          burnedKcal: { current: 410, target: null },
          duration: { current: 3720, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-03",
    workouts: [
      {
        id: "w-03-1",
        type: "RUN",
        title: "Вечерний бег",
        timestamp: "2026-07-03T19:30:00Z",
        metrics: {
          distance: { current: 3000, target: null },
          heartRate: { current: 135, target: null },
          burnedKcal: { current: 210, target: null },
          duration: { current: 1200, target: null },
        },
      },
      {
        id: "w-03-2",
        type: "YOGA",
        title: "Медитация",
        timestamp: "2026-07-03T20:30:00Z",
        metrics: {
          burnedKcal: { current: 40, target: null },
          duration: { current: 600, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-02",
    workouts: [
      {
        id: "w-02-1",
        type: "POWER",
        title: "Работа на спину",
        timestamp: "2026-07-02T15:00:00Z",
        exercises: [
          {
            id: "ex-02-11",
            name: "Подтягивания",
            sets: [{ id: "s-02-111", weight: 0, reps: 12 }],
          },
        ],
        metrics: {
          burnedKcal: { current: 150, target: null },
          duration: { current: 2400, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-01",
    workouts: [
      {
        id: "w-01-1",
        type: "CYCLING",
        title: "Велопрогулка",
        timestamp: "2026-07-01T11:00:00Z",
        metrics: {
          avgSpeed: { current: 18, target: null },
          distance: { current: 8000, target: null },
          burnedKcal: { current: 300, target: null },
          duration: { current: 2500, target: null },
        },
      },
    ],
  },
];

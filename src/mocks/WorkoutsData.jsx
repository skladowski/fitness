export const WorkoutsData = [
  // --- СТРИК (15 июля - 7 июля) ---
  {
    date: "2026-07-15",
    workouts: [
      {
        id: "w-15-1",
        type: "RUN",
        title: "Бег",
        timestamp: "2026-07-15T09:00:00Z",
        metrics: {
          distance: { current: 6200, target: 6000 },
          heartRate: { current: 155, target: null },
          burnedKcal: { current: 410, target: null },
          duration: { current: 2100, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-14",
    workouts: [
      {
        id: "w-14-1",
        type: "POWER",
        title: "Интенсивные ноги",
        timestamp: "2026-07-14T18:30:00Z",
        exercises: [
          {
            id: "ex-14-11",
            name: "Приседания со штангой",
            sets: [
              { id: "s-14-1", weight: 60, reps: 10 },
              { id: "s-14-2", weight: 65, reps: 10 },
            ],
          },
        ],
        metrics: {
          burnedKcal: { current: 320, target: null },
          duration: { current: 3300, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-13",
    workouts: [
      {
        id: "w-13-1",
        type: "YOGA",
        title: "Вечернее восстановление",
        timestamp: "2026-07-13T20:00:00Z",
        metrics: {
          burnedKcal: { current: 95, target: null },
          duration: { current: 2400, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-12",
    workouts: [
      {
        id: "w-12-1",
        type: "CYCLING",
        title: "Заезд по парку",
        timestamp: "2026-07-12T11:00:00Z",
        metrics: {
          avgSpeed: { current: 21, target: null },
          distance: { current: 15400, target: null },
          burnedKcal: { current: 520, target: null },
          duration: { current: 4200, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-11",
    workouts: [
      {
        id: "w-11-1",
        type: "RUN",
        title: "Легкий бег",
        timestamp: "2026-07-11T08:00:00Z",
        metrics: {
          distance: { current: 4000, target: null },
          heartRate: { current: 138, target: null },
          burnedKcal: { current: 280, target: null },
          duration: { current: 1560, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-10",
    workouts: [
      {
        id: "w-10-1",
        type: "POWER",
        title: "Грудь и трицепс",
        timestamp: "2026-07-10T17:00:00Z",
        exercises: [
          {
            id: "ex-10-1",
            name: "Жим лежа",
            sets: [{ id: "s-10-1", weight: 50, reps: 12 }],
          },
        ],
        metrics: {
          burnedKcal: { current: 245, target: null },
          duration: { current: 2900, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-09",
    workouts: [
      {
        id: "w-09-1",
        type: "RUN",
        title: "Короткая пробежка",
        timestamp: "2026-07-09T07:30:00Z",
        metrics: {
          distance: { current: 3000, target: null },
          heartRate: { current: 140, target: null },
          burnedKcal: { current: 210, target: null },
          duration: { current: 1140, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-08",
    workouts: [
      {
        id: "w-08-1",
        type: "CYCLING",
        title: "Вечерний байк",
        timestamp: "2026-07-08T19:00:00Z",
        metrics: {
          avgSpeed: { current: 19, target: null },
          distance: { current: 9000, target: null },
          burnedKcal: { current: 310, target: null },
          duration: { current: 2700, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-07",
    workouts: [
      {
        id: "w-07-1",
        type: "POWER",
        title: "Спина и бицепс",
        timestamp: "2026-07-07T18:00:00Z",
        exercises: [
          {
            id: "ex-07-1",
            name: "Тяга верхнего блока",
            sets: [{ id: "s-07-1", weight: 45, reps: 12 }],
          },
        ],
        metrics: {
          burnedKcal: { current: 200, target: null },
          duration: { current: 2600, target: null },
        },
      },
    ],
  },

  // --- ПРОПУСК (6, 5, 4 июля) ---

  // --- ПРЕДЫДУЩИЕ ТРЕНИРОВКИ ---
  {
    date: "2026-07-03",
    workouts: [
      {
        id: "w-03-1",
        type: "RUN",
        title: "Интервалы",
        timestamp: "2026-07-03T08:00:00Z",
        metrics: {
          distance: { current: 5000, target: null },
          heartRate: { current: 162, target: null },
          burnedKcal: { current: 380, target: null },
          duration: { current: 1620, target: null },
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
        title: "Full Body",
        timestamp: "2026-07-02T12:00:00Z",
        exercises: [
          {
            id: "ex-02-1",
            name: "Выпады",
            sets: [{ id: "s-02-1", weight: 15, reps: 15 }],
          },
        ],
        metrics: {
          burnedKcal: { current: 290, target: null },
          duration: { current: 3600, target: null },
        },
      },
    ],
  },
  {
    date: "2026-07-01",
    workouts: [
      {
        id: "w-01-1",
        type: "YOGA",
        title: "Гибкость",
        timestamp: "2026-07-01T10:00:00Z",
        metrics: {
          burnedKcal: { current: 110, target: null },
          duration: { current: 1800, target: null },
        },
      },
    ],
  },
  {
    date: "2026-06-30",
    workouts: [
      {
        id: "w-30-06-1",
        type: "CYCLING",
        title: "Длинная поездка",
        timestamp: "2026-06-30T09:00:00Z",
        metrics: {
          avgSpeed: { current: 24, target: null },
          distance: { current: 25000, target: null },
          burnedKcal: { current: 750, target: null },
          duration: { current: 5400, target: null },
        },
      },
    ],
  },
  {
    date: "2026-06-29",
    workouts: [
      {
        id: "w-29-06-1",
        type: "RUN",
        title: "Вечерний расслабленный бег",
        timestamp: "2026-06-29T19:30:00Z",
        metrics: {
          distance: { current: 4500, target: null },
          heartRate: { current: 144, target: null },
          burnedKcal: { current: 330, target: null },
          duration: { current: 1980, target: null },
        },
      },
    ],
  },
  {
    date: "2026-06-28",
    workouts: [
      {
        id: "w-28-06-1",
        type: "POWER",
        title: "Плечи",
        timestamp: "2026-06-28T16:00:00Z",
        exercises: [
          {
            id: "ex-28-1",
            name: "Жим Арнольда",
            sets: [{ id: "s-28-1", weight: 12, reps: 12 }],
          },
        ],
        metrics: {
          burnedKcal: { current: 180, target: null },
          duration: { current: 2400, target: null },
        },
      },
    ],
  },
];

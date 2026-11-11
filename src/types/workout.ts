import { Metrics } from "./metrics";
export type WorkoutEntity = {
  timestamp: string;
  type: string;
  exercises?: ExerciseEntity[];
  metrics: Metrics;
};
export type ExerciseSetEntity = {
  weight: number | string;
  reps: number | string;
};
export type ExerciseEntity = {
  sets: ExerciseSetEntity[];
};

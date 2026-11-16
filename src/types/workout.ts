import { Metrics } from "./metrics";
import { ActivityType } from "./activity";
export type WorkoutEntity = {
  timestamp: string;
  type: ActivityType;
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

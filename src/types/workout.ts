import { Metrics } from "./metrics";
import { ActivityType } from "./activity";
export type WorkoutEntity = {
  id: string;
  timestamp: string;
  title?: string;
  type: ActivityType;
  exercises?: ExerciseEntity[];
  metrics: Metrics;
};
export type ExerciseSetEntity = {
  weight: number | string;
  reps: number | string;
  id: string;
};
export type ExerciseEntity = {
  sets: ExerciseSetEntity[];
  id: string;
  name: string;
};

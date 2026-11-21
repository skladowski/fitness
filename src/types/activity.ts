export type ActivityType =
  | "RUN"
  | "POWER"
  | "CYCLING"
  | "YOGA"
  | "SWIMMING"
  | "CALORIES"
  | "WALK"
  | "NUTRITION"
  | "STEPS"
  | "SLEEP"
  | "ACTIVE_MINUTES"
  | "TRAINING_COUNT";
export type SportType = Extract<
  ActivityType,
  "RUN" | "CYCLING" | "YOGA" | "SWIMMING" | "POWER"
>;

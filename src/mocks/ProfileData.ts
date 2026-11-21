import { ActivityLevel, Gender } from "../types/profile";
import { SportType } from "../types/activity";
type PersonalInfoEntity = {
  firstName: string;
  lastName: string;
  gender: Gender;
  city: string;
  email: string;
  hereSince: string;
  birthDate: string;
  level: number;
  daysInARow: number;
  isConfirmed: boolean;
  goalsReached: number;
  personalRecords: number;
  fitnessPreferences: SportType[];
  aboutMe: string;
};

type BodyMetricsEntity = {
  weight: number;
  height: number;
  fatPercent: number;
  levelActivity: ActivityLevel;
};

export type ProfileEntity = {
  personalInfo: PersonalInfoEntity;
  bodyMetrics: BodyMetricsEntity;
};

export const ProfileData: ProfileEntity = {
  personalInfo: {
    firstName: "Илья",
    lastName: "Ильич",
    gender: "male",
    city: "Минск",
    email: "ilya@example.com",
    hereSince: "2026-05-01",
    birthDate: "2002-12-28",
    level: 34,
    daysInARow: 21,
    isConfirmed: true,
    goalsReached: 47,
    personalRecords: 4,
    fitnessPreferences: ["RUN", "CYCLING", "YOGA", "SWIMMING", "POWER"],
    aboutMe:
      "Люблю бег и велоспорт. Тренируюсь 4× в неделю, готовлюсь к первому полумарафону.",
  },
  bodyMetrics: {
    weight: 78,
    height: 181,
    fatPercent: 17,
    levelActivity: "Moderate",
  },
};

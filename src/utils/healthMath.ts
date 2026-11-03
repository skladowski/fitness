import { Gender } from "../types/profile";
import { ActivityLevel } from "../types/profile";
export function calculateBMI(weight: number, height: number) {
  const BMI = weight / (height / 100) ** 2;
  return BMI;
}
export function getBMIStatus(bmi: number) {
  if (bmi < 18.5) {
    return { label: "Дефицит", color: "var(--blue)" };
  } else if (18.5 <= bmi && bmi < 25) {
    return { label: "Норма", color: "var(--green)" };
  } else if (25 <= bmi && bmi < 30) {
    return { label: "Избыток", color: "var(--amber)" };
  } else if (bmi >= 30) {
    return { label: "Ожирение", color: "var(--red)" };
  } else {
    return { label: "Неверное значение", color: "var(--gray)" };
  }
}

const dictionary = {
  Sedentary: 1.2,
  Moderate: 1.55,
  Active: 1.725,
};

export function calculateTDEE(
  weight: number,
  height: number,
  age: number,
  levelActivity: ActivityLevel,
  gender: Gender,
) {
  const baseBMR = 10 * weight + 6.25 * height - 5 * age;
  const BMR = baseBMR + (gender === "male" ? +5 : -161);
  const TDEE = BMR * dictionary[levelActivity];
  return {
    bmr: BMR,
    tdee: TDEE,
  };
}
export function calculateWorkoutCalories(tdee: number, timer: number) {
  const dayFraction = timer / 86400;
  return tdee * dayFraction;
}

const nowDate = new Date();
export function calculateAge(birthDate: string) {
  return nowDate.getFullYear() - new Date(birthDate).getFullYear();
}

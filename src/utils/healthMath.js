export function calculateBMI(weight, height) {
  const BMI = weight / (height / 100) ** 2;
  return BMI;
}
export function getBMIStatus(bmi) {
  if (bmi < 18.5) {
    return { label: "Дефицит", color: "var(--blue)" };
  } else if (18.5 <= bmi && bmi < 25) {
    return { label: "Норма", color: "var(--green)" };
  } else if (25 <= bmi && bmi < 30) {
    return { label: "Избыток", color: "var(--amber)" };
  } else if (bmi >= 30) {
    return { label: "Ожирение", color: "var(--red)" };
  }
}

const dictionary = {
  Sedentary: 1.2,
  Moderate: 1.55,
  Active: 1.725,
};

export function calculateTDEE(weight, height, age, activityLevel, gender) {
  const baseBMR = 10 * weight + 6.25 * height - 5 * age;
  const BMR = baseBMR + (gender === "male" ? +5 : -161);
  const TDEE = BMR * dictionary[activityLevel];
  return TDEE;
}

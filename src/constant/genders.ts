import { Gender } from "../types/profile";
type GenderEntity = {
  key: Gender;
  label: string;
};
export const GENDERS: GenderEntity[] = [
  {
    key: "male",
    label: "Мужской",
  },
  {
    key: "female",
    label: "Женский",
  },
  {
    key: "other",
    label: "Другое",
  },
];

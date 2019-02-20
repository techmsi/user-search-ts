export enum Gender {
  Male = "male",
  Female = "female"
}

export interface GenderChoiceProps {
  active: boolean;
  gender: Gender;
  setGender: (gender: Gender) => void;
}

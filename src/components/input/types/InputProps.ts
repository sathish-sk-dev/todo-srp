import { InputType } from "../enums/InputType";

export type InputProps = {
  value: string;
  onChange: (value: string) => void;
  limit: number;
  type: InputType;
  onSubmit: () => void;
};

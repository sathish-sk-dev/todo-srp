import { AddButtonProps } from "./AddButtonProps";
import { ReactComponent as AddIcon } from "../../../../assets/svg/add-button.svg";
import "./AddButton.css";

export const AddButton = ({ onClick }: AddButtonProps) => {
  return <AddIcon className={"add-button"} onClick={onClick} />;
};

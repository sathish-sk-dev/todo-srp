import { SaveButtonProps } from "./SaveButton.props";
import "./SaveButton.css";

export const SaveButton = ({ disabled = false, onClick }: SaveButtonProps) => {
  const disableClassName = disabled ? "save-button-disabled" : "";
  const className = `${disableClassName} save-button-container`;

  const onClickButton = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div className={className} onClick={onClickButton}>
      {"Save"}
    </div>
  );
};

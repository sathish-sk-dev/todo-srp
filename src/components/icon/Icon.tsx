import { IconProps } from "./Icon.props";
import "./Icon.css";

export const Icon = ({
  containerClassName,
  children,
  onClick,
  disabled = false,
}: IconProps) => {
  const disabledClassName = disabled ? "icon-container-disabled" : "";
  const className = `icon-container ${containerClassName} ${disabledClassName}`;

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

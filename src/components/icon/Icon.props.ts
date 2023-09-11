import React from "react";

export type IconProps = {
  containerClassName?: string;
  children: React.ReactElement;
  onClick: () => void;
  disabled?: boolean;
};

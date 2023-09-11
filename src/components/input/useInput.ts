import { UseInputHook } from "./types/UseInputHook";
import { UseInputProps } from "./types/UseInputProps";
import React, { useEffect, useRef } from "react";

export const useInput = ({
  limit,
  onChange,
  onSubmit,
}: UseInputProps): UseInputHook => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length <= limit) {
      onChange(value);
    }
  };

  const onClear = () => {
    onChange("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return { inputRef, onChangeInput, onClear, handleKeyDown };
};

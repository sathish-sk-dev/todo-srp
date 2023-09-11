import React, {  LegacyRef } from "react";

export type UseInputHook = {
  inputRef: LegacyRef<HTMLInputElement>;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;

};

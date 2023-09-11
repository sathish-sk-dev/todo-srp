import { renderHook } from "@testing-library/react";
import { useInput } from "../useInput";
import React from "react";

describe("useInput", () => {
  test("Should call onchange function when limit is not exceed", () => {
    const limit = 10;
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const { result } = renderHook(() =>
      useInput({ limit, onChange, onSubmit }),
    );
    const inputEvent = {
      target: {
        value: "test",
      },
    };
    result.current.onChangeInput(
      inputEvent as React.ChangeEvent<HTMLInputElement>,
    );

    expect(onChange).toHaveBeenCalledWith("test");
  });

  test("Should not call onchange function when limit is exceeded", () => {
    const limit = 10;
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const { result } = renderHook(() =>
      useInput({ limit, onChange, onSubmit }),
    );
    const inputEvent = {
      target: {
        value: "test tetst testet",
      },
    };
    result.current.onChangeInput(
      inputEvent as React.ChangeEvent<HTMLInputElement>,
    );

    expect(onChange).not.toHaveBeenCalled();
  });

  test("Should call onChange with empty string when onClear is called", () => {
    const limit = 10;
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    const { result } = renderHook(() =>
      useInput({ limit, onChange, onSubmit }),
    );
    result.current.onClear();
    expect(onChange).toHaveBeenCalledWith("");
  });
});

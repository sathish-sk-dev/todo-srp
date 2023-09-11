import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Input } from "../Input";

jest.mock("../useInput", () => ({
  useInput: jest.fn(() => ({
    onChangeInput: jest.fn(),
    inputRef: { current: null },
    handleKeyDown: jest.fn(),
  })),
}));

describe("Input Component", () => {
  const defaultProps = {
    value: "",
    onChange: jest.fn(),
    limit: 100,
    type: "text",
    onSubmit: jest.fn(),
  };

  it("renders without crashing", () => {
    const { container } = render(<Input {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  it("renders input element with specified props", () => {
    const { getByRole } = render(<Input {...defaultProps} />);
    const inputElement = getByRole("textbox");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("value", "");
  });

  it("calls onChangeInput when input value changes", () => {
    const { getByRole } = render(<Input {...defaultProps} />);
    const inputElement = getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(defaultProps.onChange).toHaveBeenCalledWith("test");
  });

  it("calls handleKeyDown when a key is pressed", () => {
    const { getByRole } = render(<Input {...defaultProps} />);
    const inputElement = getByRole("textbox");

    fireEvent.keyDown(inputElement, { key: "Enter" });
    expect(defaultProps.onSubmit).toHaveBeenCalled();
  });

  it("renders character count and limit correctly", () => {
    const { getByText } = render(<Input {...defaultProps} value="Hello" />);
    const countElement = getByText("5 / 100");

    expect(countElement).toBeInTheDocument();
  });
});

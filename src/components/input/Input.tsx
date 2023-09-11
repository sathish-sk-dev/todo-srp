import { InputProps } from "./types/InputProps";
import "./Input.css";
import { useInput } from "./useInput";

export const Input = ({
  value,
  onChange,
  limit,
  type,
  onSubmit,
}: InputProps) => {
  const { onChangeInput, inputRef, handleKeyDown } = useInput({
    limit,
    onChange,
    onSubmit,
  });

  console.log("Render Input");

  const renderLimit = () => {
    return (
      <span className={"count"}>
        {value.length}
        <span className={"limit"}> {`/${limit}`} </span>
      </span>
    );
  };

  return (
    <div className={"input-container"}>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
      />
      {renderLimit()}
    </div>
  );
};

import "./InlineEdit.css";
import { Icon } from "../icon/Icon";
import { ReactComponent as CheckIcon } from "../../assets/svg/check.svg";
import { ReactComponent as CloseIcon } from "../../assets/svg/cross.svg";
import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";
import { Input } from "../input/Input";
import { InputType } from "../input/enums/InputType";
import { InlineEditProps } from "./types/InlineEdit.props";
import { useInlineEdit } from "./useInlineEdit";
import { InputViewType } from "../../features/todo/components/todo-item/enums/InputViewType";

export const InlineEdit = ({ name, onSubmit, onClose }: InlineEditProps) => {
  const {
    viewType,
    value,
    onChangeInput,
    onClickSubmit,
    onClickClose,
    onEdit,
  } = useInlineEdit({
    name,
    onSubmit,
    onClose,
  });

  console.log("Render Inline Edit")

  const renderLabel = () => {
    return <span className={"inline-label"}> {name} </span>;
  };

  const renderInput = () => {
    return (
      <Input
        value={value}
        onChange={onChangeInput}
        limit={75}
        type={InputType.TEXT}
        onSubmit={onClickSubmit}
      />
    );
  };

  const renderSubmitIcon = () => {
    return (
      <Icon onClick={onClickSubmit}>
        <CheckIcon />
      </Icon>
    );
  };

  const renderCloseIcon = () => {
    return (
      <Icon onClick={onClickClose}>
        <CloseIcon />
      </Icon>
    );
  };

  const renderEditIcon = () => {
    return (
      <Icon onClick={onEdit}>
        <EditIcon />
      </Icon>
    );
  };

  const renderEditContainer = () => {
    return (
      <>
        {renderInput()}
        {renderSubmitIcon()}
        {renderCloseIcon()}
      </>
    );
  };

  const renderLabelContainer = () => {
    return (
      <>
        {renderLabel()}
        {renderEditIcon()}
      </>
    );
  };

  const renderContainer = () => {
    if (viewType === InputViewType.VIEW) {
      return renderLabelContainer();
    }
    return renderEditContainer();
  };

  return <div className={"inline-edit-container"}>{renderContainer()}</div>;
};

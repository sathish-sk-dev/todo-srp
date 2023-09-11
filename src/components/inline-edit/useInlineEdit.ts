import { useEffect, useState } from "react";

import { UseInlineEditProps } from "./types/useInlineEdit.props";
import { UseInlineEditHooks } from "./types/useInlineEdit.hooks";
import { InputViewType } from "../../features/todo/components/todo-item/enums/InputViewType";

export const useInlineEdit = ({
  name,
  onSubmit,
  onClose,
}: UseInlineEditProps): UseInlineEditHooks => {
  const [value, setValue] = useState<string>(name);
  const [viewType, setViewType] = useState<InputViewType>(InputViewType.EDIT);

  useEffect(() => {
    if (value.trim() !== "") {
      setViewType(InputViewType.VIEW);
    }
  }, []);

  const onEdit = () => {
    setViewType(InputViewType.EDIT);
  };

  const onCancel = () => {
    setViewType(InputViewType.VIEW);
  };

  const onClickSubmit = () => {
    onSubmit(value);
    onCancel();
  };

  const onClickClose = () => {
    onClose();
    onCancel();
  };

  return {
    viewType,
    value,
    onChangeInput: setValue,
    onClickSubmit,
    onClickClose,
    onEdit,
  };
};

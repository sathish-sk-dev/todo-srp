import { InputViewType } from "../../../features/todo/components/todo-item/enums/InputViewType";

export type UseInlineEditHooks = {
  onChangeInput: (value: string) => void;
  onClickClose: () => void;
  onClickSubmit: () => void;
  onEdit: () => void;
  value: string;
  viewType: InputViewType;
};

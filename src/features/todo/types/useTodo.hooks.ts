import { ITodoItem } from "../interfaces/ITodoItem";

export type UseTodoHooks = {
  onAdd: () => void;
  onComplete: (itemId: string) => void;
  onDelete: (itemId: string) => void;
  onEdit: (todoItem: ITodoItem) => void;
  onReOrder: (todoItems: ITodoItem[]) => void;
  todoItems: ITodoItem[];
  disableSave: boolean;
  onClickSave: () => void;
  isLoading: boolean
};

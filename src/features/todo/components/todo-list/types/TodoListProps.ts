import { ITodoItem } from "../../../interfaces/ITodoItem";

export type TodoListProps = {
  todoItems: ITodoItem[];
  onEdit: (todoItem: ITodoItem) => void;
  onReOrder: (todoItems: ITodoItem[]) => void;
  onDelete: (itemId: string) => void;
};

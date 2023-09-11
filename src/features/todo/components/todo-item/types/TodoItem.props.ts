import { ITodoItem } from "../../../interfaces/ITodoItem";

export type TodoItemProps = {
  todoItem: ITodoItem;
  onEditTodoItem: (todoItem: ITodoItem) => void;
  onDeleteTodoItem: (todoId: string) => void;
};

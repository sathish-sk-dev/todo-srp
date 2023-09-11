import { ITodoItem } from "../../../interfaces/ITodoItem";

export type UseTodoItemProps = {
  todoItem: ITodoItem;
  onEditTodoItem: (todoItem: ITodoItem) => void;
  onDeleteTodoItem: (todoId: string) => void;
};

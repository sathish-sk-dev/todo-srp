import { ITodoItem } from "../../interfaces/ITodoItem";

export type UseTodoApiHooks = {
  isLoading: boolean;
  todos: ITodoItem[];
};

import { useTodoReducer } from "./reducer/useTodoReducer";
import { UseTodoHooks } from "./types/useTodo.hooks";
import { ITodoItem } from "./interfaces/ITodoItem";
import { areAllItemsHaveValues } from "./utils/TodoReducerUtils";
import { useTodoApi } from "./api/useTodoApi";
import { useEffect } from "react";

export const useTodo = (): UseTodoHooks => {
  const [
    todoState,
    { addTodoList, addTodo, editTodo, reOrderTodo, completeTodo, deleteTodo },
  ] = useTodoReducer();
  const { todoItems } = todoState;

  const { isLoading, todos } = useTodoApi();

  useEffect(() => {
    if (!isLoading) {
      addTodoList(todos);
    }
  }, [isLoading]);

  const onClickSave = () => {
    /// Api call
  };

  const onAdd = () => {
    addTodo();
  };

  const onEdit = (todoItem: ITodoItem) => {
    editTodo(todoItem);
  };

  const onDelete = (itemId: string) => {
    deleteTodo(itemId);
  };

  const onReOrder = (todoItems: ITodoItem[]) => {
    reOrderTodo(todoItems);
  };

  const onComplete = (itemId: string) => {
    completeTodo(itemId);
  };

  const disableSave = !areAllItemsHaveValues(todoItems);

  return {
    isLoading,
    onAdd,
    onComplete,
    onDelete,
    onEdit,
    onReOrder,
    todoItems,
    disableSave,
    onClickSave,
  };
};

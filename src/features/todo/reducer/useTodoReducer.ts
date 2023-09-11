import { ITodoState } from "../interfaces/ITodoState";
import { ITodoItem } from "../interfaces/ITodoItem";
import {
  addItem,
  deleteItem,
  markItemAsCompleted,
  reOrderItems,
  updateItem,
} from "../utils/TodoReducerUtils";
import useMethods from "use-methods";
import { generateUniqueId } from "../../../utils/Utils";

const initialState: ITodoState = {
  todoItems: [
    { id: generateUniqueId(), name: "", order: 1, isCompleted: false },
  ],
};

const todoMethods = (state: ITodoState) => ({
  addTodoList: (todoItems: ITodoItem[]) => {
    state.todoItems = todoItems
  },
  addTodo: () => {
    state.todoItems = addItem(state.todoItems);
  },
  editTodo: (todoItem: ITodoItem) => {
    state.todoItems = updateItem(state.todoItems, todoItem);
  },
  reOrderTodo: (newOrderedItems: ITodoItem[]) => {
    state.todoItems = newOrderedItems;
        // reOrderItems(newOrderedItems);
  },
  completeTodo: (todoId: string) => {
    state.todoItems = markItemAsCompleted(state.todoItems, todoId);
  },
  deleteTodo: (todoId: string) => {
    state.todoItems = deleteItem(state.todoItems, todoId);
  },
});

const useTodoReducer = () => {
  return useMethods(todoMethods, initialState);
};

export { useTodoReducer };

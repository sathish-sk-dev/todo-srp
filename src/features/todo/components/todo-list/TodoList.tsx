import { TodoItem } from "../todo-item/TodoItem";
import { Reorder } from "framer-motion";
import React from "react";
import { ITodoItem } from "../../interfaces/ITodoItem";
import { TodoListProps } from "./types/TodoListProps";

export const TodoList = ({
  todoItems,
  onReOrder,
  onEdit,
  onDelete,
}: TodoListProps) => {
  console.log("Render Todo List");
  return (
    <Reorder.Group axis="y" onReorder={onReOrder} values={todoItems}>
      {todoItems.map((todoItem: ITodoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          onEditTodoItem={onEdit}
          onDeleteTodoItem={onDelete}
        />
      ))}
    </Reorder.Group>
  );
};

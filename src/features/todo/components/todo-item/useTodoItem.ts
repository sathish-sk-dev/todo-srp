import { UseTodoItemHooks } from "./types/useTodoItem.hooks";
import { UseTodoItemProps } from "./types/useTodoItem.props";
import { useState } from "react";
import {useDragControls, useMotionValue} from "framer-motion";
import {useRaisedShadow} from "../animation/useRaisedShadow";

export const useTodoItem = ({
  todoItem,
  onEditTodoItem,
  onDeleteTodoItem,
}: UseTodoItemProps): UseTodoItemHooks => {
  const { id } = todoItem;
  const [showTrash, setShowTrash] = useState<boolean>(false);
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  const toggleShowTrash = (isVisible: boolean) => {
    setShowTrash(isVisible);
  };

  const onEdit = () => {
    toggleShowTrash(false);
  };

  const onCancel = () => {
    toggleShowTrash(true);
  };

  const onSave = (value: string) => {
    todoItem.name = value;
    onEditTodoItem(todoItem);
    toggleShowTrash(true);
  };

  const onDelete = () => {
    onDeleteTodoItem(id);
  };

  return {
    y,
    boxShadow,
    dragControls,
    showTrash,
    onEdit,
    onCancel,
    onSave,
    onDelete,
  };
};

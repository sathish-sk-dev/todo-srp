import React from "react";
import { Reorder } from "framer-motion";
import { ReorderIcon } from "../../../../components/reorder-icon/ReorderIcon";
import { ReactComponent as TrashIcon } from "../../../../assets/svg/trash.svg";
import "./TodoItem.css";
import { InlineEdit } from "../../../../components/inline-edit/InlineEdit";
import { useTodoItem } from "./useTodoItem";
import { TodoItemProps } from "./types/TodoItem.props";
import { Icon } from "../../../../components/icon/Icon";

export const TodoItem = React.memo(
  ({ todoItem, onEditTodoItem, onDeleteTodoItem }: TodoItemProps) => {
    const { id, name } = todoItem;
    const {
      y,
      boxShadow,
      dragControls,
      showTrash,
      onCancel,
      onSave,
      onDelete,
    } = useTodoItem({
      todoItem,
      onEditTodoItem,
      onDeleteTodoItem,
    });

    const renderInlineEdit = () => {
      return <InlineEdit name={name} onClose={onCancel} onSubmit={onSave} />;
    };

    const renderTrashIcon = () => {
      if (showTrash) {
        return (
          <Icon containerClassName={"trash-icon"} onClick={onDelete}>
            <TrashIcon />
          </Icon>
        );
      }
    };

    return (
      <Reorder.Item
        value={todoItem}
        id={id}
        style={{ boxShadow, y }}
        dragListener={false}
        dragControls={dragControls}
        className={"todo-item"}
      >
        <ReorderIcon dragControls={dragControls} />
        {renderInlineEdit()}
        {renderTrashIcon()}
      </Reorder.Item>
    );
  },
);

import "./Todo.css";
import React from "react";
import { useTodo } from "./useTodo";
import { AddButton } from "./components/add-button/AddButton";
import { SaveButton } from "./components/save-button/SaveButton";
import { TodoList } from "./components/todo-list/TodoList";
import { Spinner } from "../../components/spinner/Spinner";

const Todo = () => {
  const {
    isLoading,
    todoItems,
    onAdd,
    onComplete,
    disableSave,
    onClickSave,
    onDelete,
    onEdit,
    onReOrder,
  } = useTodo();

  const renderAddButton = () => {
    console.log("Render Add Button");
    return <AddButton onClick={onAdd} />;
  };

  const renderSaveButton = () => {
    console.log("Render Save Button");
    return <SaveButton disabled={disableSave} onClick={onClickSave} />;
  };

  const renderTodoList = () => {
    return (
      <TodoList
        todoItems={todoItems}
        onEdit={onEdit}
        onReOrder={onReOrder}
        onDelete={onDelete}
      />
    );
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={"todo-container"}>
        {renderTodoList()}
        {renderAddButton()}
      </div>
      {renderSaveButton()}
    </>
  );
};

export default Todo;

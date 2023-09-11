import { useEffect, useState } from "react";
import { ITodoItem } from "../interfaces/ITodoItem";
import { UseTodoApiHooks } from "./types/UseTodoApiHooks";

export const useTodoApi = (): UseTodoApiHooks => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://api.npoint.io/bc6614cb7251badeaff7")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setIsLoading(false);
      });
  }, []);

  return { todos, isLoading };
};

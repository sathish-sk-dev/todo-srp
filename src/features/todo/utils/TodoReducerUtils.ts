import { ITodoItem } from "../interfaces/ITodoItem";
import { generateUniqueId } from "../../../utils/Utils";

/**
 * Constructs a new todo item with a unique ID, order, and default properties.
 * @param todoItems - The existing list of todo items.
 * @returns A new todo item.
 */
const constructNewItem = (todoItems: ITodoItem[]): ITodoItem => {
  const id = generateUniqueId();
  const order = todoItems.length + 1;
  return {
    id,
    name: "",
    order,
    isCompleted: false,
  };
};

/**
 * Add a new todo item to the list.
 * @param todoItems - The current todo items list.
 * @returns The updated todo items list.
 */
const addItem = (todoItems: ITodoItem[]): ITodoItem[] => {
  const newItem = constructNewItem(todoItems);
  return [...todoItems, newItem];
};

/**
 * Update an existing todo item in the list.
 * @param todoItems - The current todo items list.
 * @param updatedItem - The updated todo item.
 * @returns The updated todo items list.
 */
const updateItem = (
  todoItems: ITodoItem[],
  updatedItem: ITodoItem,
): ITodoItem[] => {
  return todoItems.map((item) =>
    item.id === updatedItem.id ? updatedItem : item,
  );
};

/**
 * Reorder todo items in the list.
 * @param newOrderItems - The new ordered todo items list.
 * @returns The updated todo items list.
 */
const reOrderItems = (newOrderItems: ITodoItem[]): ITodoItem[] => {
  return newOrderItems.map((item, index) => ({ ...item, order: index + 1 }));
};

/**
 * Mark a todo item as completed.
 * @param todoItems - The current todo items list.
 * @param itemId - The ID of the item to mark as completed.
 * @returns The updated todo items list.
 */
const markItemAsCompleted = (
  todoItems: ITodoItem[],
  itemId: string,
): ITodoItem[] => {
  return todoItems.map((item) =>
    item.id === itemId ? { ...item, isCompleted: true } : item,
  );
};

/**
 * Delete a todo item from the list.
 * @param todoItems - The current todo items list.
 * @param itemId - The ID of the item to delete.
 * @returns The updated todo items list.
 */
const deleteItem = (todoItems: ITodoItem[], itemId: string): ITodoItem[] => {
  return todoItems.filter((item) => item.id !== itemId);
};

/**
 * Check if all items in an array of todo items have a non-empty 'name' property.
 * @param todoItems - The array of todo items to check.
 * @returns `true` if all items have a valid 'name', `false` otherwise.
 */
const areAllItemsHaveValues = (todoItems: ITodoItem[]): boolean => {
  return todoItems.every((item) => {
    return (
      item.name !== undefined && item.name !== null && item.name.trim() !== ""
    );
  });
};

export {
  deleteItem,
  addItem,
  markItemAsCompleted,
  updateItem,
  reOrderItems,
  areAllItemsHaveValues,
};

import { v4 as uuid } from "uuid";
const addToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
const removeFromLocalStorage = (key) => localStorage.removeItem(key);
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      const newTodo = [
        ...state,
        { id: uuid(), isChecked: false, content: payload },
      ];
      addToLocalStorage("todo", newTodo);
      return newTodo;
    case "DELETE_TODO":
      const removedTodo = state.filter((todo) => todo.id !== payload);
      removedTodo.length !== 0
        ? addToLocalStorage("todo", removedTodo)
        : removeFromLocalStorage("todo");
      return removedTodo;
    case "TOGGLE_CHECKED":
      const checkedTodo = state.map((todo) =>
        todo.id === payload ? { ...todo, isChecked: !todo.isChecked } : todo
      );
      addToLocalStorage("todo", checkedTodo);
      return checkedTodo;
    case "GET_TODO":
      return getFromLocalStorage("todo") ?? "";
    default:
      return { ...state };
  }
};

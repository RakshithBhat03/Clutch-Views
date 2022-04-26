import { v4 as uuid } from "uuid";
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = [
        ...state,
        { id: uuid(), isChecked: false, content: action.payload },
      ];
      localStorage.setItem("todo", JSON.stringify(newTodo));
      return newTodo;
    case "DELETE_TODO":
      const removedTodo = state.filter((todo) => todo.id !== action.payload);
      removedTodo.length !== 0
        ? localStorage.setItem("todo", JSON.stringify(removedTodo))
        : localStorage.removeItem("todo");
      return removedTodo;
    case "TOGGLE_CHECKED":
      const checkedTodo = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      );
      localStorage.setItem("todo", JSON.stringify(checkedTodo));
      return checkedTodo;
    case "GET_TODO":
      return JSON.parse(localStorage.getItem("todo")) ?? "";

    default:
      return { ...state };
  }
};

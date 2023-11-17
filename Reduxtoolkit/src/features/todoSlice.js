import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Mahesh Hello",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "Mahesh Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleIsCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleIsCompleted } = todoSlice.actions;
export default todoSlice.reducer;

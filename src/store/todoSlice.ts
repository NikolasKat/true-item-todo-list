import { createSlice } from "@reduxjs/toolkit";

export interface ITodo {
   id: number;
   text: string;
   completed: boolean;
}

export interface ITodos {
   todos: Array<ITodo>;
}

const initialState: ITodos = {
   todos: [],
};

export const todoSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      addTodo(state, action) {},
      removeTodo(state, action) {},
      handleToggle(state, action) {},
   },
});

export const { addTodo, handleToggle, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

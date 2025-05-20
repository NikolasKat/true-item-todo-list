import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchTodos = createAsyncThunk(
   "todos/fetchCourses",
   async function (_data, { rejectWithValue, dispatch }) {
      try {
         const response = await axios
            .get("http://localhost:4444/todos")
            .then((response) => {
               dispatch(setTodo(response.data));
            });
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export const todoSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      addTodo(state, action) {},
      removeTodo(state, action) {},
      handleToggle(state, action) {},
      setTodo(state, action) {
         state.todos = action.payload;
      },
   },
});

export const { addTodo, handleToggle, removeTodo, setTodo } = todoSlice.actions;
export default todoSlice.reducer;

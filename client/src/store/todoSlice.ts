import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ITodo {
   id: string;
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

export const deleteTodo = createAsyncThunk(
   "todos/deleteTodo",
   async function (todoID: number, { rejectWithValue, dispatch }) {
      try {
         dispatch(removeTodo(todoID));
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export const handleToggle = createAsyncThunk(
   "todos/handleToggle",
   async function (todoID: number, { rejectWithValue, dispatch }) {
      try {
         dispatch(changeStatus(todoID));
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export const addNewTodo = createAsyncThunk(
   "todos/addNewTodo",
   async function (data: string, { rejectWithValue, dispatch }) {
      try {
         const response = await axios
            .post("http://localhost:4444/todos", {
               text: data,
            })
            .then((response) => console.log(response.data));
         dispatch(addTodo(data));
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export const todoSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      setTodo(state, action) {
         state.todos = action.payload;
      },
      removeTodo(state, action) {
         const newData = state.todos.filter(
            (item) => item.id !== action.payload
         );
         state.todos = newData;
      },
      addTodo(state, action) {
         if (action.payload.length) {
            state.todos.push({
               id: new Date().toISOString(),
               text: action.payload,
               completed: false,
            });
            console.log(state.todos);
         }
      },
      changeStatus(state, action) {
         const newData = state.todos.map((item) => {
            if (item.id === action.payload) {
               return {
                  id: item.id,
                  text: item.text,
                  completed: !item.completed,
               };
            }

            return item;
         });

         state.todos = newData;
      },
   },
});

export const { changeStatus, removeTodo, setTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;

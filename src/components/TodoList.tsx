import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../store/todoSlice";
import { useEffect } from "react";

const TodoList = () => {
   const data = useSelector((state: RootState) => state.todos.todos);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(fetchTodos());
   }, [dispatch]);

   const todos = data.map((item) => {
      const { completed, id, text } = item;
      return <TodoItem key={id} id={id} completed={completed} text={text} />;
   });
   return <ul>{todos}</ul>;
};

export default TodoList;

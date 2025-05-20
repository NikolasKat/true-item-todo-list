import { useState } from "react";
import type { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../store/todoSlice";

const TodoForm = () => {
   const [text, setText] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();

   return (
      <form className="flex justify-center flex-wrap mt-10">
         <input
            className="text-lg block p-2.5 mx-3"
            value={text}
            onChange={(e) => {
               setText(e.target.value);
            }}
            placeholder="Type new task"
            required
         />
         <button onClick={() => dispatch(addNewTodo(text))}>
            Add new task
         </button>
      </form>
   );
};

export default TodoForm;

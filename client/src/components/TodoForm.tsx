import { useState } from "react";
import type { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../store/todoSlice";

const TodoForm = () => {
   const [text, setText] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();

   return (
      <form className="flex justify-center flex-wrap mt-10 p-9 mb-20">
         <input
            className="text-lg block p-2.5 mx-3 rounded-xl"
            value={text}
            onChange={(e) => {
               setText(e.target.value);
            }}
            placeholder="Type new task"
            required
         />
         <button
            className="ms-2 text-lg font-medium bg-gray-600 p-2 rounded-xl"
            onClick={() => dispatch(addNewTodo(text))}
         >
            Add new task
         </button>
      </form>
   );
};

export default TodoForm;

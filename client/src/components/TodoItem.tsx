import type { FC } from "react";
import { deleteTodo, handleToggle, type ITodo } from "../store/todoSlice";
import type { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";

const TodoItem: FC<ITodo> = ({ completed, id, text }) => {
   const dispatch = useDispatch<AppDispatch>();

   return (
      <>
         <li
            key={id}
            className="flex justify-between items-center mb-6 p-4 rounded-lg min-h-3 bg-gray-700 "
         >
            <label className="flex items-center cursor-pointer relative">
               <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => {
                     dispatch(handleToggle(id));
                  }}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-purple-600 checked:border-purple-600 mr-3"
               />
               <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-[10px] transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-3.5 w-3.5"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     stroke="currentColor"
                     strokeWidth="1"
                  >
                     <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </span>
               <span>
                  <span
                     className={`flex break-words max-w-[220px] min-h-1 font-medium text-lg ${
                        completed ? "line-through" : null
                     }`}
                  >
                     {text}
                  </span>
               </span>
            </label>
            <button
               className="ms-2 text-lg font-medium bg-gray-600 p-2 rounded-xl"
               onClick={() => dispatch(deleteTodo(id))}
            >
               Delete
            </button>
         </li>
      </>
   );
};

export default TodoItem;

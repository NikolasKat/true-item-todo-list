import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
   return (
      <>
         <main className="mt-9 mx-6">
            <TodoForm />
            <TodoList />
         </main>
      </>
   );
}

export default App;

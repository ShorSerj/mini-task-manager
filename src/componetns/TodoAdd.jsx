import { useState } from "react";
import { useTodo } from "@/hooks/useTodo.jsx";
import preloader from "@/assets/preloader.svg";
function TodoAdd() {
  const [newTodo, newTodoState] = useState("");
  const [loading, setLoading] = useState(false);
  const { addTodo } = useTodo();

  return (
    <>
      <div className="grid grid-cols-[5fr_1fr] gap-x-3 pt-2 mt-3">
        <input
          type="text"
          placeholder="New todo"
          value={newTodo}
          onChange={(e) => newTodoState(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={async () => {
            setLoading(true);
            await addTodo({
              id: crypto.randomUUID(),
              text: newTodo,
              done: false,
            });
            newTodoState("");
            setLoading(false);
          }}
          className={`grid grid-cols-[70px_25px] items-center h-[45px] whitespace-nowrap bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition
              ${loading || !newTodo ? "opacity-50 pointer-events-none" : ""}`}
        >
          Add Todo{" "}
          {loading && (
            <img src={preloader} className="max-w-7" alt="preloader" />
          )}
        </button>
      </div>
    </>
  );
}

export default TodoAdd;

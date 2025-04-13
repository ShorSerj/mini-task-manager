import { useTodo } from "@/hooks/useTodo.jsx";
import { useFilter } from "@/hooks/useFilter.jsx";
import { useEffect, useState } from "react";
function TodoList() {
  const { getTodos, removeTodo, toggleTodo, updateTodo } = useTodo();
  const { filteredTodos } = useFilter();
  const [todosToAnimate, setTodosToAnimate] = useState(filteredTodos);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    setTodosToAnimate(filteredTodos);
  }, [filteredTodos]);

  const fadeInAnimation = {
    animation: "fadeIn 0.5s ease-out",
  };

  return todosToAnimate.map((todo) => (
    <div
      className="flex items-center pt-2"
      style={fadeInAnimation}
      key={todo.id}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
        className="w-4 h-4 accent-blue-600"
      />

      <input
        type="text"
        value={todo.text}
        onChange={(e) => updateTodo(todo.id, e.target.value)}
        className="mx-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={() => removeTodo(todo.id)}
        className="cursor-pointer bg-[#e06155] text-white px-3 py-1 rounded hover:bg-red-700 transition"
      >
        Delete
      </button>
    </div>
  ));
}

export default TodoList;

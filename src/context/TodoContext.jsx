import {
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from "react";
import { fakeRequest } from "@/utils/fakeRequest.js";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const savedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const getTodos = useCallback(async () => {
    await fakeRequest(() => {
      setTodos(savedTodos ? JSON.parse(savedTodos) : []);
    }, 1000);
  }, []);

  const addTodo = useCallback(async (todo) => {
    await fakeRequest(() => {
      setTodos((todos) => [...todos, todo]);
    }, 500);
  }, []);

  const toggleTodo = useCallback(async (id) => {
    await fakeRequest(() => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo,
        ),
      );
    }, 300);
  }, []);

  const updateTodo = useCallback((id, text) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo)),
    );
  }, []);

  const removeTodo = useCallback(async (id) => {
    await fakeRequest(() => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, 500);
  }, []);

  const value = useMemo(
    () => ({ todos, getTodos, addTodo, toggleTodo, updateTodo, removeTodo }),
    [todos],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

import {
  createContext,
  useCallback,
  useState,
  useMemo,
  useEffect,
} from "react";
import { fakeRequest } from "@/utils/fakeRequest.js";

export const TodoContext = createContext(null);

const getLocalData = () => {
  try {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch {
    return [];
  }
};
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getLocalData);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const getTodos = useCallback(() => {
    fakeRequest(1000).then(() => {
      setTodos(getLocalData());
    });
  }, []);

  const addTodo = useCallback((todo) => {
    setTodos((todos) => [...todos, todo]);
    const newTodosId = todo.id;
    return fakeRequest(500).catch(() => {
      setError(true);
      setTodos((todos) => todos.filter((todo) => todo.id !== newTodosId));
    });
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
    fakeRequest(300).catch(() => {
      setError(true);
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo,
        ),
      );
    });
  }, []);

  const updateTodo = useCallback(
    (id, text) => {
      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo)),
      );
      fakeRequest(500).catch(() => {
        setError(true);
        setTodos(todos);
      });
    },
    [todos],
  );

  const removeTodo = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
      fakeRequest(500).catch(() => {
        setError(true);
        setTodos(todos);
      });
    },
    [todos],
  );

  const value = useMemo(
    () => ({
      todos,
      error,
      setError,
      getTodos,
      addTodo,
      toggleTodo,
      updateTodo,
      removeTodo,
    }),
    [addTodo, error, getTodos, removeTodo, todos, toggleTodo, updateTodo],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

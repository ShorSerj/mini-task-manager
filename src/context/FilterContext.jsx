import { createContext, useMemo, useState } from "react";
import { useTodo } from "@/hooks/useTodo.jsx";

export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const { todos } = useTodo();

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.done);
      case "completed":
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  }, [todos, filter]);

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <FilterContext.Provider value={{ filter, filteredTodos, changeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

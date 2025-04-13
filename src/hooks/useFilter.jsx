import { FilterContext } from "@/context/FilterContext.jsx";
import { useContext } from "react";

export const useFilter = () => {
  const todoFilter = useContext(FilterContext);

  if (!todoFilter)
    throw new Error("useTodo must be used within a TodoProvider");

  return todoFilter;
};

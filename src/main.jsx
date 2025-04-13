import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FilterProvider } from "@/context/FilterContext.jsx";
import { TodoProvider } from "@/context/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </TodoProvider>
  </StrictMode>,
);

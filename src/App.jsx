import TodoList from "@/componetns/TodoList.jsx";
import TodoAdd from "@/componetns/TodoAdd.jsx";
import FilterTabs from "@/componetns/FilterTabs.jsx";

function App() {
  return (
    <div className="max-w-[800px] mx-auto px-[55px] text-white my-[50px]">
      <h1 className="text-2xl font-semibold">Todo List</h1>
      <FilterTabs />
      <TodoList />
      <TodoAdd />
    </div>
  );
}

export default App;

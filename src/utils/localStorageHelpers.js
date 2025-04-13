export function saveTodosToStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

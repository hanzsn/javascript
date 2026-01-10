import { Todo, TodoList } from "./todo.js";
import renderTodos from "./ui.js";

const DOM = (() => {
  const getAddBtn = () => document.getElementById("add-btn");
  const getInputText = () => document.getElementById("input-text");

  return { getAddBtn, getInputText };
})();

const todoList = new TodoList();

const addTask = () => {
  const textInput = DOM.getInputText().value.trim();
  if (!textInput) return;

  const todo = new Todo(textInput);
  todoList.add(todo);

  DOM.getInputText().value = "";
  renderTodos();
};

const displayDate = (todo) => {
  return todo.date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

if (typeof window !== "undefined") {
  DOM.getAddBtn().addEventListener("click", addTask);
  DOM.getInputText().addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
}

export { addTask, todoList, displayDate };

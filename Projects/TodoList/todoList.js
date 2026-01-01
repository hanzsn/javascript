import { Todo, TodoList } from "./todo.js";
import renderTodos from "./ui.js";

const inputText = document.getElementById("input-text");
const addBtn = document.getElementById("add-btn");

const todoList = new TodoList();

const addTask = () => {
  const textInput = inputText.value.trim();
  if (!textInput) return;

  const todo = new Todo(textInput);
  todoList.add(todo);
  console.table(todoList.getTodos());

  inputText.value = "";
  renderTodos();
};

addBtn.addEventListener("click", addTask);
inputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

todoList.add(new Todo("sleep"));

export { addTask, todoList };

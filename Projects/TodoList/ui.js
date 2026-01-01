import { todoList } from "./todoList.js";

const listContainer = document.querySelector(".list-container");

const renderTodos = () => {
  listContainer.innerHTML = "";

  todoList.getTodos().forEach((todo) => {
    const wrapper = document.createElement("li");
    wrapper.className =
      "flex flex-wrap gap-2 p-2 mb-2 border border-gray-400 rounded-lg";

    const text = document.createElement("span");
    text.textContent = todo.title;
    text.className = todo.completed
      ? "line-through text-sm flex-1 min-w-0 pt-[6px] break-words"
      : "flex-1 text-sm min-w-0 pt-[6px] break-words";
    wrapper.appendChild(text);

    const doneButton = document.createElement("button");
    doneButton.textContent = "Complete";
    doneButton.className =
      "rounded-lg cursor-pointer btn btn-sm btn-neutral hover:bg-[hsl(0,0%,18%)]";
    doneButton.addEventListener("click", () => {
      todoList.toggleCompleted(todo.id);
      renderTodos();
    });
    wrapper.appendChild(doneButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
    </svg>`;
    deleteButton.className =
      "rounded-lg cursor-pointer btn btn-sm btn-neutral hover:bg-[hsl(0,0%,18%)]";
    deleteButton.addEventListener("click", () => {
      todoList.remove(todo.id);
      renderTodos();
    });
    wrapper.appendChild(deleteButton);

    listContainer.appendChild(wrapper);
  });
};

renderTodos();

export default renderTodos;

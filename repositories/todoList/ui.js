import { displayDate, todoList } from "./todoList.js";

const renderTodos = () => {
  const listContainer = document.querySelector(".list-container");
  listContainer.innerHTML = "";

  todoList.getTodos().forEach((todo) => {
    const container = document.createElement("li");
    container.className =
      "flex flex-col px-4 py-2 mb-2 border rounded-lg border-neutral-300";
    container.id = "todo-container";

    const topDiv = document.createElement("div");
    topDiv.className = "";
    container.appendChild(topDiv);

    const hr = document.createElement("hr");
    hr.className = "mt-2 border border-neutral-200";
    container.appendChild(hr);

    const botDiv = document.createElement("div");
    botDiv.className = "flex items-center justify-between w-full gap-2 pt-2";
    container.appendChild(botDiv);

    // text input
    const text = document.createElement("span");
    text.textContent = todo.taskName;
    text.className = todo.lineThrough
      ? "line-through text-sm flex-1 min-w-0 break-words"
      : "flex-1 text-sm min-w-0 break-words";

    if (todo.bold) {
      text.classList.add("font-bold");
    }
    topDiv.appendChild(text);

    // date
    const date = document.createElement("span");
    date.textContent = todo.showDate ? displayDate(todo) : "View date";
    date.className = "text-xs cursor-pointer";

    date.addEventListener("click", (e) => {
      e.stopPropagation();
      todo.showDate = !todo.showDate;
      todoList.save();
      renderTodos();
    });
    botDiv.appendChild(date);

    // btns container
    const btnsContainer = document.createElement("div");
    btnsContainer.className = "flex gap-2";
    botDiv.appendChild(btnsContainer);

    // bold button
    const boldButton = document.createElement("button");
    boldButton.innerHTML = `<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/>
    </svg>`;
    boldButton.className =
      "rounded-lg cursor-pointer btn btn-sm border-neutral-300";

    boldButton.addEventListener("click", (e) => {
      e.stopPropagation();

      todo.bold = !todo.bold;
      todoList.save();
      renderTodos();
    });
    boldButton.classList.add("disableable");
    btnsContainer.appendChild(boldButton);

    // edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = `<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
    </svg>`;
    editButton.className =
      "rounded-lg cursor-pointer btn btn-sm border-neutral-300";

    editButton.addEventListener("click", (e) => {
      e.stopPropagation();

      const input = document.createElement("input");
      input.className =
        "w-full text-sm text-red-600 rounded outline-none focus:ring-0";
      input.value = text.textContent;

      text.replaceWith(input);
      input.focus();

      window.addEventListener("click", (e) => {
        if (!input.contains(e.target)) {
          todo.taskName = input.value;
          todoList.save();
          renderTodos();
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === "Escape") {
          todo.taskName = input.value;
          todoList.save();
          renderTodos();
        }
      });
    });
    editButton.classList.add("disableable");
    btnsContainer.appendChild(editButton);

    // line-through button
    const lineThroughButton = document.createElement("button");
    lineThroughButton.innerHTML = `<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"/>
    </svg>`;
    lineThroughButton.className =
      "rounded-lg cursor-pointer btn btn-sm border-neutral-300";

    lineThroughButton.addEventListener("click", (e) => {
      e.stopPropagation();
      todoList.toggleLineThrough(todo.id);
      renderTodos();
    });
    lineThroughButton.classList.add("disableable");
    btnsContainer.appendChild(lineThroughButton);

    // done button
    const doneButton = document.createElement("button");
    doneButton.innerHTML = `<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
    </svg>`;
    doneButton.className =
      "rounded-lg cursor-pointer btn btn-sm border-neutral-300";

    doneButton.addEventListener("click", (e) => {
      e.stopPropagation();
      todo.complete = !todo.complete;
      todoList.save();
      renderTodos();
    });
    btnsContainer.appendChild(doneButton);

    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<svg class="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
    </svg>`;
    deleteButton.className =
      "rounded-lg cursor-pointer btn btn-sm border-neutral-300";
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      todoList.remove(todo.id);
      renderTodos();
    });
    btnsContainer.appendChild(deleteButton);

    if (todo.complete) {
      container.classList.add("opacity-50");
      container.querySelectorAll(".disableable").forEach((btn) => {
        btn.disabled = true;
        btn.classList.add("cursor-not-allowed");
      });
    } else {
      container.querySelectorAll(".disableable").forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("opacity-50", "cursor-not-allowed");
      });
    }

    listContainer.appendChild(container);
  });
};

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    renderTodos();
    console.table(todoList.getTodos());
  });
}

export default renderTodos;

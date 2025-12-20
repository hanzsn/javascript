const inputText = document.querySelector("#input-text");
const addButton = document.querySelector("#add-btn");
const listContainer = document.querySelector(".list-container");

function addNewTask() {
  let textInput = inputText.value.trim();
  if (!textInput) return;

  const wrapper = document.createElement("li");
  wrapper.className =
    "flex flex-wrap gap-2 p-2 mb-2 border border-gray-400 rounded-lg";

  const text = document.createElement("span");
  text.textContent = textInput;
  text.className = "flex-1 min-w-0 pt-[6px] font-medium break-words";

  const doneButton = document.createElement("button");
  doneButton.textContent = "Complete";
  doneButton.className =
    "rounded-lg cursor-pointer btn btn-neutral hover:bg-[hsl(0,0%,18%)]";
  doneButton.addEventListener("click", function () {
    console.log(this.classList);

    text.classList.toggle("line-through");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
    </svg>`;
  deleteButton.className =
    "rounded-lg cursor-pointer btn btn-neutral hover:bg-[hsl(0,0%,18%)]";
  deleteButton.addEventListener("click", function () {
    console.table(this.classList);
    wrapper.remove();

    const evDeleteButton = new CustomEvent("deleteButton", {
      detail: { status: "Task deleted!" },
    });

    document.dispatchEvent(evDeleteButton);
  });

  wrapper.appendChild(text);
  wrapper.appendChild(doneButton);
  wrapper.appendChild(deleteButton);
  listContainer.appendChild(wrapper);

  inputText.value = "";

  const evAddButton = new CustomEvent("addButton", {
    detail: { status: "Added new task!" },
  });

  document.dispatchEvent(evAddButton);
}

inputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addNewTask();
  }
});

document.addEventListener("addButton", (e) => {
  console.log(`Todo's: ${e.detail.status}`);
});

document.addEventListener("deleteButton", (e) => {
  console.log(`Todo's: ${e.detail.status}`);
});

addButton.addEventListener("click", addNewTask);

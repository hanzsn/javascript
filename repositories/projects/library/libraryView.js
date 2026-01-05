// @ts-check
import { Book } from "./library.js";
import { library } from "./controller.js";

const defaultImage = (() => {
  const default_image =
    "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

  return {
    getDefaultImage: () => {
      return default_image;
    },
  };
})();

// display books
export function renderBooks() {
  const bookContainer = document.querySelector("#book-container");
  if (bookContainer) bookContainer.innerHTML = "";

  library.getAll().forEach((book) => {
    const book_wrapper = document.createElement("div");
    book_wrapper.className =
      "flex flex-col w-full h-full overflow-hidden rounded shadow-custom group bg-base-100";
    book_wrapper.classList.add("book");
    book_wrapper.dataset.id = book.id;

    // add image if URL exists
    const card_image = document.createElement("img");
    card_image.src =
      book.imageUrl && book.imageUrl.trim() !== ""
        ? book.imageUrl
        : defaultImage.getDefaultImage();
    card_image.onerror = () => {
      card_image.src = defaultImage.getDefaultImage();
    };
    card_image.alt = book.title;
    card_image.className =
      "object-cover w-full h-40 mb-4 transition-transform duration-300 group-hover:scale-110";

    const card_title = document.createElement("h2");
    card_title.className = "mb-2 font-semibold line-clamp-2";
    card_title.textContent = `Title: ${book.title}`;

    const card_author = document.createElement("span");
    card_author.textContent = `Author: ${book.author}`;
    card_author.className = "text-sm";

    const card_pages = document.createElement("span");
    card_pages.textContent = `Pages: ${book.pages}`;
    card_pages.className = "text-sm";

    const card_read_label = document.createElement("label");
    card_read_label.className = "flex items-center gap-2 text-sm";

    const card_status = document.createElement("span");
    card_status.textContent = `Status: ${book.getStatusText()}`;
    card_status.className = "text-sm";

    const card_read_checker = document.createElement("input");
    card_read_checker.type = "checkbox";
    card_read_checker.checked = book.readStatus;
    card_read_checker.className = "flex cursor-pointer toggle-read-checkbox";

    const button_wrapper = document.createElement("div");
    button_wrapper.className =
      "flex flex-col items-stretch gap-1 p-4 mt-auto card-actions";

    const card_remove_buton = document.createElement("button");
    card_remove_buton.textContent = "Remove";
    card_remove_buton.className = "btn btn-sm btn-neutral";

    const card_wrapper_details = document.createElement("div");
    card_wrapper_details.className = "flex flex-col w-full h-full px-4";

    const inputId = document.createElement("input");
    inputId.type = "text";
    inputId.className = "flex-1 border border-gray-300 input";
    inputId.disabled = true;

    button_wrapper.appendChild(inputId);
    button_wrapper.appendChild(card_remove_buton);
    card_wrapper_details.appendChild(card_title);
    card_wrapper_details.appendChild(card_author);
    card_wrapper_details.appendChild(card_pages);
    card_read_label.appendChild(card_read_checker);
    card_read_label.appendChild(card_status);
    card_wrapper_details.appendChild(card_read_label);
    book_wrapper.appendChild(card_image);
    book_wrapper.appendChild(card_wrapper_details);
    book_wrapper.appendChild(button_wrapper);
    if (bookContainer) bookContainer.appendChild(book_wrapper);

    card_read_checker.addEventListener("change", () => {
      const currentBook = library.findById(book.id);
      if (currentBook) {
        currentBook.toggleRead();
        library.save();
        card_status.textContent = `Status: ${currentBook.getStatusText()}`;
      }
    });

    let cardClickCounter = 0;

    card_remove_buton.addEventListener("click", () => {
      cardClickCounter++;

      const existing_card_id = book_wrapper.querySelector(".book-id");

      inputId.placeholder = "Enter book Id";
      inputId.disabled = false;

      if (!existing_card_id) {
        const card_id = document.createElement("span");
        card_id.textContent = `To remove, enter this in the box above: ${book.id}`;
        card_id.className = "text-xs text-center book-id";
        button_wrapper.appendChild(card_id);
      }

      if (inputId.value.trim() === book.id) {
        removeBook(book.id);
        book_wrapper.remove();
        inputId.value = "";
      }

      if (cardClickCounter >= 2) {
        inputId.classList.remove("border-gray-300");
        inputId.classList.add("border-red-500");
      }
    });
  });
}

const form = document.querySelector("#book-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the form to reload

    const bookTitle = document.querySelector("#title");
    const bookAuthor = document.querySelector("#author");
    const bookPages = document.querySelector("#pages");
    const bookImageURL = document.querySelector("#book-image");

    if (
      bookTitle instanceof HTMLInputElement &&
      bookAuthor instanceof HTMLInputElement &&
      bookPages instanceof HTMLInputElement &&
      bookImageURL instanceof HTMLInputElement
    ) {
      library.add(
        new Book(
          bookTitle.value,
          bookAuthor.value,
          Number(bookPages.value),
          false,
          bookImageURL.value
        )
      );

      renderBooks();

      bookTitle.value = "";
      bookAuthor.value = "";
      bookPages.value = "";
      bookImageURL.value = "";
    }
  });
}

/**
 * @param {string} bookId - uuid of the book
 */
export function removeBook(bookId) {
  library.removeById(bookId);
  console.table(library.getAll());
}

/**
 * initialize
 */
renderBooks();

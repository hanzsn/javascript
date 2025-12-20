const addButton = document.querySelector("#add-book");
const bookContainer = document.querySelector("#book-container");
const form = document.querySelector("#book-form");
const submitButton = document.querySelector("#submit");

const library = [];
const DEFAULT_IMAGE =
  "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
let clickCounter = 0;

// constructor
function Book(title, author, pages, readStatus, imageUrl) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.imageUrl = imageUrl;
}

// prototype method for toggling read status
Book.prototype.info = function () {
  return `"id: ${this.id}, ${this.title} by ${this.author}, ${
    this.pages
  } pages, ${this.readStatus ? "Complete" : "Unread"}", ${
    this.imageUrl ? this.imageUrl : "none"
  }`;
};

function addBookToLibrary(title, author, pages, readStatus, imageUrl) {
  // create a book then store it in the array
  const newBook = new Book(title, author, pages, readStatus, imageUrl);
  library.push(newBook);
}

addBookToLibrary(
  "The Hobbit",
  "J.R.R Tolkien",
  295,
  false,
  "https://external-preview.redd.it/Av29Ar6NGyYXO5X5X0iqjGoLPYaK44MIynRFPPsfL1Q.jpg?auto=webp&s=94695c611152e139a02e9a446d2315ef6440baa4"
);
addBookToLibrary(
  "Solo Leveling",
  "Chugong",
  `${312} - volume 1`,
  true,
  "https://fictionhorizon.com/wp-content/uploads/2023/12/SoloLev.jpg"
);
addBookToLibrary(
  "Demon Slayer: Kimetsu no Yaiba",
  "Koyoharu Gotouge",
  `${4500}+`,
  true,
  "https://cdn.theouterhaven.net/wp-content/uploads/2024/06/demon-slayer-infinity-castle-trilogy-768x403.jpg"
);
addBookToLibrary(
  "Hell University, part 1",
  "KnightinBlack",
  256,
  true,
  "https://share-media.literal.club/media/book/knightinblack-hell-university-part-1-yj48w?format=landscape"
);
addBookToLibrary(
  "My Husband is a Mafia Boss Season 1",
  "Yanalovesyouu",
  736,
  false,
  "https://i.pinimg.com/1200x/42/8b/d8/428bd8b1b394ddaf2ce8065eb1b279cc.jpg"
);

console.table(library);

// display all books
function displayBooks() {
  bookContainer.innerHTML = "";

  library.forEach((books) => {
    const book_wrapper = document.createElement("div");

    // add image if URL exists
    const card_image = document.createElement("img");
    card_image.src =
      books.imageUrl && books.imageUrl.trim() !== ""
        ? books.imageUrl
        : DEFAULT_IMAGE;
    card_image.onerror = () => {
      card_image.src = DEFAULT_IMAGE;
    };
    card_image.alt = books.title;
    card_image.className =
      "object-cover w-full h-40 mb-4 transition-transform duration-300 group-hover:scale-110";

    book_wrapper.appendChild(card_image);

    book_wrapper.className =
      "flex flex-col shadow-custom group overflow-hidden w-full bg-base-100 min-h-[280px] rounded";
    book_wrapper.classList.add("book");
    book_wrapper.dataset.id = books.id;

    const card_title = document.createElement("h2");
    card_title.className = "mb-2 text-lg font-semibold line-clamp-2";
    card_title.textContent = `Title: ${books.title}`;

    const card_author = document.createElement("span");
    card_author.textContent = `Author: ${books.author}`;

    const card_pages = document.createElement("span");
    card_pages.textContent = `Pages: ${books.pages}`;

    const card_read_label = document.createElement("label");
    card_read_label.className = "flex items-center gap-2";

    const card_status = document.createElement("span");
    card_status.textContent = `Status: ${
      books.readStatus ? "Complete" : "Unread"
    }`;

    const card_read_checker = document.createElement("input");
    card_read_checker.type = "checkbox";
    card_read_checker.className = "flex cursor-pointer toggle-read-checkbox";
    card_read_checker.checked = books.readStatus;

    const button_wrapper = document.createElement("div");
    button_wrapper.className =
      "flex items-center justify-end mt-6 card-actions";

    const card_remove_buton = document.createElement("button");
    card_remove_buton.textContent = "Remove";
    card_remove_buton.className = "btn btn-sm btn-neutral";

    const card_wrapper_details = document.createElement("div");
    card_wrapper_details.className =
      "flex flex-col justify-end w-full h-full p-4";

    const inputId = document.createElement("input");
    inputId.type = "text";
    inputId.className = "flex-1 border border-gray-300 input";
    inputId.disabled = true;

    button_wrapper.appendChild(inputId);
    card_wrapper_details.appendChild(card_title);
    card_wrapper_details.appendChild(card_author);
    card_wrapper_details.appendChild(card_pages);
    card_read_label.appendChild(card_read_checker);
    card_read_label.appendChild(card_status);
    card_wrapper_details.appendChild(card_read_label);
    card_wrapper_details.appendChild(button_wrapper);
    button_wrapper.appendChild(card_remove_buton);
    book_wrapper.appendChild(card_wrapper_details);
    bookContainer.appendChild(book_wrapper);

    function toggleReadStatus(identification) {
      const bookToUpdate = library.find((book) => identification === book.id);

      if (bookToUpdate) {
        bookToUpdate.readStatus = !bookToUpdate.readStatus;

        card_status.textContent = `Status: ${
          bookToUpdate.readStatus ? "Complete" : "Unread"
        }`;
      }
    }

    card_read_checker.addEventListener("change", () =>
      toggleReadStatus(books.id)
    );

    card_remove_buton.addEventListener("click", () => {
      clickCounter++;

      const card_wrapper = document.querySelector(".book-id");

      inputId.placeholder = "Enter the Id";
      inputId.disabled = false;

      if (!card_wrapper) {
        const card_id = document.createElement("span");
        card_id.textContent = `To remove, enter this in the box above: ${books.id}`;
        card_id.className = "px-6 text-xs book-id";
        book_wrapper.appendChild(card_id);
      }

      if (inputId.value.trim() === books.id) {
        removeBook(books.id);
        book_wrapper.remove();

        const remove = new CustomEvent("removeBook", {
          detail: { status: "Book removed," },
        });

        document.dispatchEvent(remove);
      }

      if (clickCounter >= 2) {
        inputId.classList.remove("border-gray-300");
        inputId.classList.add("border-red-500");
      }
    });
  });
}

document.addEventListener("removeBook", (e) => {
  console.log(`Library: ${e.detail.status}`);
});

displayBooks();

// create books
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form to reload

  const bookTitle = document.querySelector("#title");
  const bookAuthor = document.querySelector("#author");
  const bookPages = document.querySelector("#pages");
  const bookImageURL = document.querySelector("#book-image");

  addBookToLibrary(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    false,
    bookImageURL.value
  );

  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookImageURL.value = "";

  displayBooks();

  const submitForm = new CustomEvent("submitForm", {
    detail: { status: "Form submitted, new book added!" },
  });

  document.dispatchEvent(submitForm);
});

document.addEventListener("submitForm", (e) => {
  console.log(`Library: ${e.detail.status}`);
});

// remove book
function removeBook(bookId) {
  const remove = library.findIndex((book) => book.id === bookId);

  if (remove !== -1) {
    library.splice(remove, 1);
  }
}
removeBook();

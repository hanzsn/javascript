const bookContainer = document.querySelector("#book-container");
const form = document.querySelector("#book-form");
const submitButton = document.querySelector("#submit");

const library = [];
const DEFAULT_IMAGE =
  "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

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
  "https://www.geekgirlauthority.com/wp-content/uploads/2015/01/Screen-Shot-2015-01-03-at-5.36.28-PM.jpg"
);
addBookToLibrary(
  "Solo Leveling",
  "Chugong",
  `${312} - volume 1`,
  true,
  "https://m.media-amazon.com/images/S/pv-target-images/a90c37cc3e0bcddcb2cc8d068664c874585e8dc3fbaeae08a742b26ad243f047.jpg"
);
addBookToLibrary(
  "Demon Slayer: Kimetsu no Yaiba",
  "Koyoharu Gotouge",
  `${4500}+`,
  true,
  "https://cdn.theouterhaven.net/wp-content/uploads/2024/06/demon-slayer-infinity-castle-trilogy-768x403.jpg"
);
addBookToLibrary(
  "Sakamoto Days",
  "Yuto Suzuki",
  `${200} - #1`,
  true,
  "https://static0.cbrimages.com/wordpress/wp-content/uploads/2022/04/sakamoto-days-key-visual.jpg"
);
addBookToLibrary(
  "Jujutsu kaisen",
  "Gege Akutami",
  `${5700} to ${6000}+`,
  false,
  "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/11/jjk-s-shibuya-incident.jpg?w=1600&h=900&fit=crop"
);
addBookToLibrary(
  "My Hero Academia",
  "Kōhei Horikosh",
  `${7500} to ${8400}+`,
  false,
  "https://miro.medium.com/v2/1*W2heFUeeOS_5lWZDBe7hpA.jpeg"
);
addBookToLibrary(
  "One Piece",
  "Eiichiro Oda",
  `${22000}+`,
  false,
  "https://image.tmdb.org/t/p/original/mBxsapX4DNhH1XkOlLp15He5sxL.jpg"
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
  "https://pbs.twimg.com/media/FRrAlBNagAYwivR.jpg"
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
      "flex flex-col w-full h-full overflow-hidden rounded shadow-custom group bg-base-100";
    book_wrapper.classList.add("book");
    book_wrapper.dataset.id = books.id;

    const card_title = document.createElement("h2");
    card_title.className = "mb-2 font-semibold line-clamp-2";
    card_title.textContent = `Title: ${books.title}`;

    const card_author = document.createElement("span");
    card_author.textContent = `Author: ${books.author}`;
    card_author.className = "text-sm";

    const card_pages = document.createElement("span");
    card_pages.textContent = `Pages: ${books.pages}`;
    card_pages.className = "text-sm";

    const card_read_label = document.createElement("label");
    card_read_label.className = "flex items-center gap-2 text-sm";

    const card_status = document.createElement("span");
    card_status.textContent = `Status: ${
      books.readStatus ? "Complete" : "Unread"
    }`;
    card_status.className = "text-sm";

    const card_read_checker = document.createElement("input");
    card_read_checker.type = "checkbox";
    card_read_checker.className = "flex cursor-pointer toggle-read-checkbox";
    card_read_checker.checked = books.readStatus;

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

    let cardClickCounter = 0;

    card_remove_buton.addEventListener("click", () => {
      cardClickCounter++;

      const existing_card_id = book_wrapper.querySelector(".book-id");

      inputId.placeholder = "Enter book Id";
      inputId.disabled = false;

      if (!existing_card_id) {
        const card_id = document.createElement("span");
        card_id.textContent = `To remove, enter this in the box above: ${books.id}`;
        card_id.className = "text-xs text-center book-id";
        button_wrapper.appendChild(card_id);
      }

      if (inputId.value.trim() === books.id) {
        removeBook(books.id);
        book_wrapper.remove();

        const remove = new CustomEvent("removeBook", {
          detail: { status: "Book removed," },
        });

        document.dispatchEvent(remove);
      }

      if (cardClickCounter >= 2) {
        inputId.classList.remove("border-gray-300");
        inputId.classList.add("border-red-500");
      }
    });

    button_wrapper.appendChild(inputId);
    button_wrapper.appendChild(card_remove_buton);
    card_wrapper_details.appendChild(card_title);
    card_wrapper_details.appendChild(card_author);
    card_wrapper_details.appendChild(card_pages);
    card_read_label.appendChild(card_read_checker);
    card_read_label.appendChild(card_status);
    card_wrapper_details.appendChild(card_read_label);
    book_wrapper.appendChild(card_wrapper_details);
    book_wrapper.appendChild(button_wrapper);
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

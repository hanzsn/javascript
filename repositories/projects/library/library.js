// @ts-check
export class Book {
  /** @type {string} */ id;
  constructor(
    title = "",
    author = "",
    pages = 0,
    readStatus = false,
    imageUrl = ""
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.imageUrl = imageUrl;
  }

  toggleRead() {
    this.readStatus = !this.readStatus;
  }

  getStatusText() {
    return this.readStatus ? "Complete" : "Unread";
  }
}

/**
 * stores all books to library
 * saves new book to browser
 * add, remove, get all books
 */
export class Library {
  constructor() {
    const saved = localStorage.getItem("books");
    if (saved) {
      const parsed = JSON.parse(saved);
      this.books = parsed
        .filter(
          (/** @type {{id: string, title: string}} */ data) =>
            data && data.id && data.title
        )
        .map(
          (
            /** @type {{id: string, title: string, author: string, pages: number, readStatus: boolean, imageUrl: string}} */ data
          ) => {
            const book = new Book(
              data.title,
              data.author,
              data.pages,
              data.readStatus,
              data.imageUrl
            );
            book.id = data.id; // restore the original ID
            return book;
          }
        );
    } else {
      this.books = [];
    }
  }

  save() {
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  /**
   * @param {Book} book
   */
  add(book) {
    this.books.push(book);
    this.save();
    return book;
  }

  /**
   * @param {string} bookId
   */
  removeById(bookId) {
    this.books = this.books.filter(
      (/**@type {Book} */ book) => book.id !== bookId
    );
    this.save();
    return this.books;
  }

  /**
   * @param {string} bookId
   */
  findById(bookId) {
    return this.books.find((/**@type {Book} */ book) => book.id === bookId);
  }

  getAll() {
    return [...this.books];
  }
}

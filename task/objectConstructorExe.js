function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.info = function () {
  return `"${this.title} by ${this.author}, ${this.pages} pages, ${
    this.hasRead ? "done reading" : "not read yet"
  }"`;
};

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);

console.log(theHobbit.info());
console.log(Object.getPrototypeOf(theHobbit) === Book.prototype);
console.log("info" in theHobbit);

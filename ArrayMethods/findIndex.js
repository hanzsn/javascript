const numbers = [4, 9, 16, 25];

const index = numbers.findIndex((num) => num > 10);

console.log(index); // 2, because 16 > 10 and it's at index 2

const comments = [
  { id: 101, text: "Hello" },
  { id: 823423, text: "Delete me" },
  { id: 102, text: "Hi there" },
];

const indexToDelete = comments.findIndex((comment) => comment.id === 823423);
if (indexToDelete !== -1) {
  comments.splice(indexToDelete, 1);
}
console.log(indexToDelete); // 1
console.log(comments);

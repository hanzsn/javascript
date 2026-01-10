function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

let getSortByAge = sortByAge(arr);
console.log(getSortByAge);

console.log(arr[0].name);

// now: [john, mary, pete]

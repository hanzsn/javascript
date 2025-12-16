// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  for (let key in obj) typeof obj[key] === "number" ? (obj[key] *= 2) : null;
};

multiplyNumeric(menu);
console.log(menu);

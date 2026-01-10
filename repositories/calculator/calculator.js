const input = document.querySelector("#input");
const numbersButton = document.querySelectorAll(".number");
const operatorsButton = document.querySelectorAll(".operator");
const decimalButton = document.querySelector(".decimal");
const equalButton = document.querySelector(".equal");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");

let decimal = ".";
let resetDisplay = true;
const operators = ["+", "-", "*", "/"];

numbersButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (input.value.length >= 25) return;
    if (input.value === "0") input.value = "";
    if (resetDisplay) {
      input.value = "";
      resetDisplay = false;
    }

    input.value += event.target.textContent;
  });
});

clearButton.addEventListener("click", (event) => {
  input.value = "0";
  resetDisplay = true;
  console.log(event.target.textContent);
});

deleteButton.addEventListener("click", (event) => {
  input.value = input.value.slice(0, -1);
  if (input.value === "") {
    input.value = "0";
    resetDisplay = true;
  }
  console.log(event.target.className);
});

decimalButton.addEventListener("click", (event) => {
  const parts = input.value.split(/[+\-*/]/); // split(regex)
  const current = parts.at(-1); // targets last element

  if (current.includes(decimal)) return;
  if (/[+\-*/]$/.test(input.value)) {
    input.value += "0.";
    return;
  }
  input.value += decimal;
  console.log(event.target.className);
});

equalButton.addEventListener("click", (event) => {
  const expression = input.value;

  const operator = operators.find((op) => expression.includes(op));
  if (!operator) return;

  const [a, b] = expression.split(operator);

  if (b === "") return;

  const result = operate(operator, Number(a), Number(b));

  input.value = result;
  resetDisplay = true;

  console.log(event.target.textContent);
});

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Error: division by zero!" : a / b;
    default:
      return "Error!";
  }
}

operatorsButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    const operator = event.target.textContent;
    const lastChar = input.value.slice(-1);

    if (!input.value && operator !== "-") return;

    if (operators.includes(lastChar)) {
      input.value = input.value.slice(0, -1) + operator;
      return;
    }

    if (operators.some((op) => input.value.includes(op))) return;

    input.value += operator;
    resetDisplay = false;
  });
});

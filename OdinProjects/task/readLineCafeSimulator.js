// café order simulator (callback)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\n\nHello, welcome to our cafe!\n");

rl.question("Whats your name? ", (ask) => {
  ask = ask.toLowerCase();
  console.log(`Hello ${ask}, we are glad you visit to our cafe.\n`);

  rl.question(`What's your order? `, (inputOrder) => {
    inputOrder = inputOrder.toLowerCase();

    const barista = (makeCoffee) => makeCoffee(`${inputOrder}`);

    const prepareOrder = () => {
      console.log(
        "Please wait while we prepare your order. It will be ready in about 5 seconds.\n"
      );
      doneOrder();
    };

    const doneOrder = () => {
      setTimeout(() => {
        console.log(
          `Your order has been completed.\nType of coffee: ${inputOrder}\nEnjoy, ${ask}!`
        );
        rl.close();
      }, 5000);
    };

    const makeCoffee = (type) => {
      console.log(`Type of coffee: ${type}\n`);
      prepareOrder();
    };
    barista(makeCoffee);
  });
});

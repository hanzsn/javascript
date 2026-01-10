// delayed math solver (callback)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\n\n=== Delayed Math Solver ===\n");

rl.question(
  "Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n\nNumber: ",
  (operation) => {
    const opt = Number(operation);
    if (![1, 2, 3, 4].includes(opt)) {
      console.log("Invalid choices. Please enter: 1, 2, 3, 4.");
      rl.close();
      return;
    }

    rl.question("\nEnter the first number: ", (a) => {
      rl.question("Enter the second number: ", (b) => {
        const calculate = (a, b, cb) => {
          console.log("\ncalculating...\n");

          setTimeout(() => {
            if (a.trim() === "" || b.trim() == "") {
              console.log("Inputs are empty.");
              rl.close();
              return;
            }

            a = Number(a);
            b = Number(b);

            if (isNaN(a) || isNaN(b)) {
              console.log("Invalid number input.");
              rl.close();
              return;
            }

            let result;
            switch (opt) {
              case 1:
                result = a + b;
                break;
              case 2:
                result = a - b;
                break;
              case 3:
                result = a * b;
                break;
              case 4:
                if (b === 0) {
                  console.log("Cannot divide by zero.");
                }
                result = a / b;
                break;
            }
            cb(result);
            rl.close();
          }, 2000);
        };
        const answer = (result) => console.log("result: ", result);
        calculate(a, b, answer);
      });
    });
  }
);

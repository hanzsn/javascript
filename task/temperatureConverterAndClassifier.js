// Temperature Converter & Classifier (Map, forEach, Filter)
const tempInCelcius = ["0", "12", "25", "37", "40"];
const toNum = tempInCelcius.map(Number);

const toFahrenheit = toNum.map((n) => (n * 9) / 5 + 32);
console.log(`\n\nTemperatures in fahrenheit: ${toFahrenheit.join(", ")}`);

const toCelcius = toFahrenheit.map((n) => ((n - 32) * 5) / 9);
console.log(`Temperatures in celcius: ${toCelcius.join(", ")}\n`);

toNum.forEach((n) => {
  if (n > 30) console.log(`${n}°C is hot`);
  else console.log(`${n}°C is cold`);
});

const hotTemp = toNum.filter((n) => n > 30);
const coldTemp = toNum.filter((n) => n <= 30);

console.log(`\nHot temperatures: ${hotTemp.join(", ")}`);
console.log(`Cold temperatures: ${coldTemp.join(", ")}`);

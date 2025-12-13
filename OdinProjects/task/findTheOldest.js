const people = [
  { name: "jose", birth: 1969, passed: 2008 },
  { name: "juan", birth: 1950, passed: 2000 },
  { name: "bens", birth: 1970, passed: 2010 },
  { name: "richard", birth: 1975, passed: 2017 },
  { name: "denver", birth: 1985, passed: 1997 },
];

const yearsLived = people.map((e) => e.passed - e.birth);
console.table(yearsLived);

const maxYears = Math.max(...yearsLived);
console.log(`The oldest person: ${maxYears}`);

const isOldest = people.find(
  (person) => person.passed - person.birth === maxYears
);
console.log(isOldest);

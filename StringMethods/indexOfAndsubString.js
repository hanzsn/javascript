// index & subString()
let text = "My email is mamiwowie@gmail.com";

let start = text.indexOf("mamiwowie");
let end = text.indexOf(".com") + 4;

console.log(text.substring(start, end));

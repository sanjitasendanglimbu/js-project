const name = "sanjita";
const repoCount = "06";

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} amd My repo count is ${repoCount}.`);

const gameName = new String("sanjita")

// console.log(gameName.length);
// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);


const another = gameName.slice(-7, 4)
console.log(another);

const newStringOne = "    sanjita   "
console.log(newStringOne)
console.log(newStringOne.length);

console.log(newStringOne.trim());

const url = "https://sanjita.com/userid:10"

console.log(url.replace('10', '01'))

console.log(url.includes("sanj"))

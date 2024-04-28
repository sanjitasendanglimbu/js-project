// there two type of datatype 

// 1. Primitive
// 7 types: String, Number, Boolearn, null, undefined, Symbol, BigInt
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 3445653256777n
console.log(typeof bigNumber);

// 2. Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "ram", "sanjita"];
let myObj = {
  name: "Sujata",
  age: 18,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTem);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);

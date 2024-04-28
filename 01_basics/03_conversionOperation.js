let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let login = true
console.log(typeof login);

// "33" => 33
// "33abc" => NaN
// true => 1: false => 0

let isLoggedIn = "sanjita"

let booleanIsLoggendIn = Boolean(isLoggedIn)
console.log(booleanIsLoggendIn);

// 1 => true; 0=> false
// "" => false
// if there is empty then false
//"sanlita" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
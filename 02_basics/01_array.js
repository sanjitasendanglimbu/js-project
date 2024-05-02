// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr["one", "two", "three", "four", "five", ]);
// console.log(myArr2[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)// it add value in last
// myArr.pop() //it remove last value

// myArr.unshift(7) // it add value in first
//myArr.shift() // it remove first index value
//console.log(myArr.includes(9));// it give answer in boolen if the number include then true or false.
//console.log(myArr.indexOf(4)); // it used to find index at which givin to elememt. if it not found then give -1

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//slice, splice

console.log("A ", myArr); // A [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)
console.log(myn1); //[1, 2]
console.log("B ", myArr); // [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3)

console.log(myn2); //[1, 2, 3]
console.log("C ", myArr); //C [0, 4, 5]
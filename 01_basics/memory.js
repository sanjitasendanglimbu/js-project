// ***** Memory ******
// there two type of memory
// stack (Primitive), Heap (NonPrimitive)

let myYoutubename = "tech.com";

let anothername = myYoutubename;

anothername = "sanjitasendang"

console.log(myYoutubename);
console.log(anothername);

//this heap(non-primitive) directly change

let userOne ={
    name: "ram",
    email: "ram@gmail.com",
    password: "123abcd",
}

let userTwo = userOne;

userTwo.name = "harry";

console.log(userOne);
console.log(userTwo);
// singleton and miltiton
//Object.create
// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "sanjita",
    "full name" : "sanjita limbu",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "pemba@goole.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser['full name']);
console.log(jsUser[mySym]);

jsUser.email = "sanjita@google.com";
console.log(jsUser);
//Object.freeze(jsUser)
jsUser.email = "sanjita@microsoft.com";

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
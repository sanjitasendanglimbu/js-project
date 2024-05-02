//const tinderUser = new Object() // singleton object
const tinderUser = {} // this non-singleton object

tinderUser.id = "123asd"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
 email: "some@gmail.com",
 fullname: {
     userfullname:{
      firstname: "Shanti",
      lastnmae: "Limbu"
     } 

 }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "a", 6: "d"}
// const obj3 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);
// console.log(obj1 === obj4)

const users = [
    {
     id: 1,
     email: "san@gmail.com"
    },
    {
        id: 2,
        email: "man@gmail.com"
    },
    {
        id: 2,
        email: "ran@gmail.com"
    }
]

// console.log(users)

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// ###### object de-structure ######

const course = {
    coursename: "js in nepali",
    price: "999",
    courseInstructor: "sanjita"
}

// course.courseInstructor

const {courseInstructor: tech} = course
// console.log(courseInstructor);
console.log(tech);

// ***** API ****
// {
//     "name": "ram",
//     "coursename": "js in english",  
// }

// some times we get API in array 
//rendomuser / it use to get free API
// JSON formatter 
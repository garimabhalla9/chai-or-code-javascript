// Primitive - (call by value hote hai)

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Q) Is javascript dynamic typed language or statical typed language?

const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp = null
let userEmail;         //undefined

const id=Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);         //false

//  const bigNumber = 345434566765443344n        //bigint

//Reference (Non-Primitive)

//Array, Objects, Functions

const heros= ["ironman", "spiderman", "batman"];
let myObj= {
    name: "garima",
    age:20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);

//link to read datatype docs
// https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack is used in(primitive type), Heap is used in(non-primitive type)
// when stack memory is used, then we get a copy of variable.
// when object/memory is defined, we get a reference which means if we change something it will change into original value.


//stack
let myYoutubename = "garimadotcom"

let anothername = myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


//heap
let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "garima@google.com"

console.log(userOne.email);
console.log(userTwo.email);





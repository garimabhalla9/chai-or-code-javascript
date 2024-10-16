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


// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);
// console.log("02" > 1);


//we should avoid the above comparisons
console.log(null > 0);             //false
console.log(null == 0);            //false
console.log(null >= 0);            //true
//the reason is that an equality check == and comparison > <> = <= work dofferently.
//Comparisons convert null to a number, treating it as 0. thats why (3) null>=0 is true and (1)null>0 is false.

console.log(undefined == 0);      //false
console.log(undefined > 0);       //false
console.log(undefined < 0);       //false


// === strictly check (both datatype should be same)
console.log("2" === 2);           //false  






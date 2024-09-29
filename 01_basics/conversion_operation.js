// let score = "78abc";
// console.log(typeof score);
// console.log(typeof(score)); // as a method
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN -> not a number as 33abc is not number
//                             // null -> 0
//                             // undefined -> NaN
//                             // jab bool ko convert karenge number m toh 
//                             // true -> 1
//                             // false -> 0

// let isloggedIn = "komal";
// let booleanIsLoggedIn = Boolean(isloggedIn);
// console.log(booleanIsLoggedIn);
// // atleast string ==> true
// // empty string ==> false
// // 1 ==> true , 0 ==> false

// let someNumber = 90 + 89
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


/* <------operations ----->  */
let str1 = "komal";
let str2 = " singh";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);  
console.log(1 + "2");
console.log("1" + 2 + 2); //122 agr string phle toh baki sab string m convert ho jayega
console.log( 1 + 2 + "2"); //32 agr number phle h toh phle number solve hoga

console.log(+true); // 1
console.log(+""); //0


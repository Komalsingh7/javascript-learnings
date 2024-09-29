"use strict"; // treat all js code as newer version

// alert(3+3) // we are using nodejs , not browser

let name = "komal"
let age = 18
let isLoggedIn = false

// number => 2 to power 53
//bigint 
// string => ""
// boolean => true /false
// null => standalone value
// undefined =>
// symbol => unique

// object

console.log(typeof age);
console.log(typeof undefined) ; // undefined
console.log(typeof null); // object


// more info on data types

// Primitive -> call by value
/* 7 types : String , Number , Boolean , null , undefined , Symbol,
             BigInt  
*/



const score = 100;
const scoreValue = 100.3;

const isloggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);

const bigNumber =  3456786945646795456346n;

// Reference (Non Primitive)
// Array , Objects , Functions 

const heroes = ["shaktimaan" , "naagraj" , "doga"];
let myObj = {
    name : "hitesh",
    age: 22 , 
}

const myFunction = function(){
      console.log("Hello World");
}

//dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getSeconds());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023 , 0 ,23);
// console.log(myCreateDate.toDateString());


// let myCreatedDate = new Date ("01-14-2023");
// console.log(myCreatedDate.toLocaleDateString());
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()  +1);
console.log(newDate.getDay());

//customise the property
newDate.toLocaleString('default' , {
     weekday : "long"
})
console.log(newDate.toLocaleString());



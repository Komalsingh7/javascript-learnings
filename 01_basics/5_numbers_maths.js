const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber =   123.8966
console.log(otherNumber.toPrecision(4));

console.log(Number.MIN_VALUE);

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++ maths +++++++++++++
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.round(7.9));
console.log(Math.random()); //humesha value 0 aur 1 k beech m value deti hn 
console.log(Math.random() *10) + 1;

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max- min + 1 )) + min);
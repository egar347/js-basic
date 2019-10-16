//1. Assign by hand same value to 3 variables in binary, octal and hexadecimal format.
let value = 33;
let a = 0b0100001;
let b = 0o41;
let c = 0x21;

//2.Implement function extractNumbers which will leave only numbers in passed string.
const text = '789hello'

function extractNumbers (text) {
  return parseInt(text);
}
console.log(extractNumbers(text));

//3. Declare a variable with decimal value and convert to binary, octal and hexadecimal.
const a = 177;
const b = a.toString(2);
console.log(b)
const c = parseInt(a.toString(2), 8);
console.log(c)
const d = parseInt(c, 16);
console.log(d)

//4. use Math.random to generate random value from 0 to 100.
console.log(Math.floor(Math.random() * 100))
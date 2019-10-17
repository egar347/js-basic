// 1.Get 100 using + operator and numeric value 10.
let a = 100 + 0
console.log(a)

let a = +(10 + "0")
console.log(a)

let a = Number(10 + "0")
console.log(a)

let a = parseInt(10 + "0")
console.log(a)


// 2. You have following string: Amazon annual revenue of US$232.887 billion extract revenue and count monthly income.
let textString = 'Amazon annual revenue of US$232.887 billion';
let newTextString = textString.substr(-15, 7)
console.log(newTextString) // 232.887
let newString = Number(newTextString.replace(".", ""))
console.log(newString) // 232887
let monthlyIncome = newString/12;
console.log(monthlyIncome) // 19407.25


// 3. Declare variable which will contain logs counter. Log few times with updating this value accordingly.

let a = 35;
console.log(++a) // 36
console.log(a++) // 36
console.log(a) // 37


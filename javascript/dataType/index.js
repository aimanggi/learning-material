// Data Type
console.log('1', typeof('anggi')); // string
console.log('2', typeof(12)); // number
console.log('3', typeof({})); // object
console.log('4', typeof([])); // array 
console.log('5', typeof(undefined)); // undefined
console.log('6', typeof(null)); // null
console.log('7', typeof(new Date()) === 'date') // false
console.log('8', typeof(NaN)); // number
console.log(new Date());

// Expression
console.log('2' + 3) //23 (string)
console.log('2' * 3) //222
console.log('p' * 6) // pppppp

console.log(parseInt('2'))

// Parsing
console.log(parseInt('23'))
console.log(String(23))

// Primitive value
let month = 'September';
month[0] = 'C'
month = 'Ceptember'
console.log(month) // ceptember

// Objects
let months = ['September', 'October', 'November'];
months[0] = 'August'
console.log(months) // ['August', etc]

console.log({name: 'anggi'})


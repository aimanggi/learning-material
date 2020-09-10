// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6);

// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}

// With return
function sumReturnNum(num1, num2) {
  return num1 + num2;
}

function sumReturnObj(num1, num2) {
  return {
    result: num1 + num2,
  };
}

// Without return, so the function doesn't output the sum
function sumNoReturn(num1, num2) {
  num1 + num2;
}

// Function Expression
const dog = function dog(name, sound) {
  return `Hello, ${name}! ${sound}`;
};

const dogName = "Unyu";
const dogSound = "Guk guk";

console.log(dog(dogName, dogSound));

// Callback Function
const isEven = (n) => {
  return n % 2 == 0;
};

let printMsg = (evenFunc, num) => {
    // Write code here
};

// Pass in isEven as the callback function
printMsg(isEven, 4);
// Prints: The number 4 is an even number: True.

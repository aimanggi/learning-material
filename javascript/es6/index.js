// Const Let
var person1 = "sam";

let person2 = "rio";
const person3 = ["gilbert"];

person2 = "ryan";
console.log("person2", person2);

// person3 = "azani"
// console.log('person3', person3)

let food = "";

if (person2 === "ryan") {
  food = "bakso";
} else {
  food = "mie";
}

// Arrow function
function tes(e) {
  console.log("hallo");
}

const tes1 = (e) => {
  return {
    name: e,
  };
};

const tes2 = () => console.log("hallo");

const tes3 = (e) => ({ name: e });
console.log(tes3("your self"));

const tes4 = (value1, value2) => {
  return value1 + value2;
};
console.log(tes4(1, 2));

// Spread operator
const car = ["Honda", "Jaguar", "BMW"];
let newArr = [];

newArr = [...car, "Mercedes"];
console.log(newArr);

const cat = {
  name: "unyu",
  color: "black",
};

const dog = {
  name: "bruno",
  sound: "guk guk",
};

const newObj = {
  ...cat,
  ...dog,
};

const newDog = {
  ...dog,
  name: "agus",
};

console.log(newObj);
console.log(newDog);

// Destructure

const flower = {
  color: "yellow",
  season: "summer",
  x: "y",
};

const { color, season, x } = flower;
// flower.color
console.log(color, season, x);

const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a);

// for in / for of ???
// for in untuk object
// for of untuk array (looping)

// Optional chaining
const flower1 = {
  color: "yellow",
  season: "summer",
  x: "y",
  y: {
    test: "yuhuu",
    name: {
      age: 12,
    },
  },
};

console.log(flower1.z ? flower1.z.name : undefined);

console.log(flower1.y?.name?.age);

// Ternary
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

function getFee2(isMember) {
  if (isMember) {
    return "$2.00";
  } else {
    return "$10.00";
  }
}

// &&
const isSchool = false;

const isCheckSchool = isSchool && { school: 'SMA' }

const data = {
    name: 'anggi',
    ...isCheckSchool,
}

console.log('data', data)

// ??
const isSchool1 = null;

const isCheckSchool1 = isSchool1 ?? { school: 'SMA' }

const data2 = {
    name: 'anggi',
    ...isCheckSchool1,
}

console.log('data', data2)
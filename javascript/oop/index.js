const thisIsObject = {}

const person = {
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`)
  },
  greeting: function () {
    alert(`Hi, I am ${this.name[0]}`);
  },
};

// Key and Value
console.log(person.gender)
// key = "gender"
// value = "male"

// Accessing object keys
console.log(Object.keys(person)) 

// Dot Notation
console.log(person.name)
console.log(person.name.first)
// console.log(person.bio())
// console.log(person.greeting())

// Bracket Notation
console.log(person['name']['last'])
console.log(person.interests[0])

// Accessing key dynamically
const changeValue = (name, value) => {
    // write code here
}

changeValue("gender", "female");
// console.log('new person', person)

// What is "this"?

// Regular functions
function createPerson(name, age) {
    // write code here
}

// console.log('new person', createPerson('Anggi', 24))

// Constructor functions
function CreatePerson(name, age) {
   // write code here
}

const person1 = new CreatePerson('Anggi', 24);
console.log('person 1', person1)

// Class based function (ES6)
class PersonClass {
    //Write code here
}
const person2 = new PersonClass('Anggi yuhuu', 24)
person2.greeting()





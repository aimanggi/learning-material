console.log("hallo");

let data = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("data todos", data);
    document.getElementById("todos").innerHTML = `${data
      .map((todo) => `
        <div>${todo.id}</div>
        <h3>${todo.title}</h3>
        <div>${todo.body}</div>
       <br/>
      `)
      .join(" ")}`;
  });

const promiseA = (data) =>
  new Promise((resolve, reject) => {
    if (data === 1) {
      resolve("success");
    }
    reject("failed");
  });

// Pending
// Resolved
// Reject

// console.log('promise A', promiseA())

promiseA(1)
  .then((val) => console.log("asynchronous logging has val:", val)) // return succes value
  .catch((err) => console.log("error", err)); // return error

console.log("immediate logging");

const test = () => console.log("test");
test();

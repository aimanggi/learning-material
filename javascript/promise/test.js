const totalPage = document.getElementById("totalPage");
const currentPage = document.getElementById("page");
const root = document.getElementById("todos");
const page = 2; // Jumlah data per page

let page = 1,
  maxPage = 0;
usersData = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    maxPage = Math.ceil(data.length / pageSize); // 5
    // Math.floor -> 6.7 -> 6
    // Math.ceil -> 3.3 -> 4

    // usersData.push(...data);
    usersData = data;
    // storing data to global variable

    sliceArray(usersData, 1);
  });

const sliceArray = (arr, pageNumber) => {
  // page 1: (1 - 1) * 2, 1 * 2 = 0, 2  arr.slice(0, 2)
  // page 2: (2 - 1) * 2, 2 * 2 = 2, 4  arr.slice(2, 4)

  let data = arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize); 
  show(data);
};

const show = (data) => {
  root.innerHTML = `${data
    .map(
      (user) => `
      <li>${user.name}</li>
     <br/>
    `
    )
    .join(" ")}`;

  currentPage.innerHTML = page;

  totalPage.innerHTML = maxPage;
};

const next = () => {
  const newPage = page + 1 > maxPage ? maxPage : page + 1;
  page = newPage;
  sliceArray(usersData, newPage);
};

const prev = () => {
  const newPage = page - 1 === 0 ? 1 : page - 1;
  page = newPage;
  sliceArray(usersData, newPage);
};

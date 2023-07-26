console.log("test");

let addBtn = document.getElementById("add-btn");
let minusBtn = document.getElementById("minus-btn");
let quantity = document.getElementById("quantity");

let count = 0;
quantity.innerHTML = count;

addBtn.addEventListener("click", () => {
  count += 1;
  quantity.innerHTML = count;
  console.log("add");
});

// function addButton() {
//   x += 1;
//   quantity.innerHTML = x;
//   console.log("test");
// }

minusBtn.addEventListener("click", () => {
  count -= 1;
  quantity.innerHTML = count;
  console.log("minus");
});

let count = 0;
const value = document.querySelector("#value");
const decreaseBtn = document.querySelector(".decrease");

const resetBtn = document.querySelector(".reset");

const increaseBtn = document.querySelector(".increase");
decreaseBtn.addEventListener("click", () => {
  console.log(value.innerText);
  count--;
  value.innerText = count;
});

increaseBtn.addEventListener("click", () => {
  console.log(value.innerText);
  count++;
  value.innerText = count;
});

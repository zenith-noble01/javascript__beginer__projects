let count = 0;
let countElem = document.getElementById("counterElem");

const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("Reset");
const decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", () => {
  count++;
  countElem.innerHTML = count;
});
resetBtn.addEventListener("click", () => {
  count = 0;
  countElem.innerHTML = count;
});
decrementBtn.addEventListener("click", () => {
  count--;
  countElem.innerHTML = count;
});

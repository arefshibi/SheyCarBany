const tearBtn = document.getElementById("tearBtn");
const leftCard = document.querySelector(".separator");
const rightCard = document.querySelector(".content-data");

tearBtn.addEventListener("click", () => {
  leftCard.classList.add("tear");
  rightCard.classList.add("tear");
});
const message = document.querySelector(".message");
const game = {};
const output = document.querySelector(".que");
const nx = document.querySelector(".next");

nx.addEventListener("click", createQuestion);

function createQuestion() {
  nx.style.display = "none";
}

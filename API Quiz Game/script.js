const message = document.querySelector(".message");
const game = {};
const output = document.querySelector(".que");
const nx = document.querySelector(".next");

nx.addEventListener("click", createQuestion);
const url =
  "https://script.google.com/macros/s/AKfycbxp36V9dy6XTqqDXA5WqPBNZ_17Pu9xLhqCCgstbInF9CSudSffparX6OcNSKhYwLBl/exec";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data.data);
    game.total = data.data.length;
    game.val = 0;
    game.score = 0;
    game.arr = data.data;
    data.data.forEach(function (el) {
      console.log(el);
    });
    createQuestion();
  });

function createQuestion() {
  nx.style.display = "none";
  if (game.val + 1 > game.total) {
    message.textContent = `Your score was ${game.score} out of ${game.total}`;
    output.textContent = "Game Over";
  } else {
    message.textContent = `Question # ${game.val + 1} out of ${game.total}`;
    output.innerHTML = "";
    let q = game.arr[game.val];
    console.log(q.question);
    const main = document.createElement("div");
    main.textContent = q.question;
    main.classList.add("question");
    output.appendChild(main);
    arrayRandom(q.opt);
    q.opt.forEach(function (el) {
      console.log(el);
      let span = document.createElement("span");
      span.textContent = el;
      span.classList.add("answer");
      span.classList.add("btn");
      output.appendChild(span);
      span.ans = q.answer;
      span.addEventListener("click", checker);
    });
  }
}
function arrayRandom(arr) {
  arr.sort(function () {
    return 0.5 - Math.random();
  });
}
function checker(e) {
  //console.log(e.target.ans);
  //console.log(this.ans);
  const selAns = document.querySelectorAll(".answer");
  selAns.forEach(function (ele) {
    ele.classList.remove("answer");
    ele.style.color = "#ddd";
    ele.removeEventListener("click", checker);
  });
  let sel = e.target;
  console.log(sel.textContent);
  if (sel.textContent == sel.ans) {
    console.log("correct");
    nx.textContent = "Correct - click to move to the next question";
    game.score++;
  } else {
    console.log("wrong");
    nx.textContent = "Wrong - click to move to the next question";
  }
  game.val++;
  nx.style.display = "block";
}

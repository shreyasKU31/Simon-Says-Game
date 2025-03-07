let start = false;
let level = 0;
let compSeq = [];
let userSeq = [];
let colClass = ["b1", "b2", "b3", "b4"];
let p = document.querySelector("p");
document.addEventListener("keypress", function () {
  if (start == false) {
    start = true;
    console.log("Game started");
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  p.innerText = `Level : ${level}`;
  genBox();
}

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(() => {
    btn.classList.remove("gameFlash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

function genBox() {
  let random = Math.floor(Math.random() * 4);
  let randomeBtn = colClass[random];
  let btn = document.querySelector(`.${randomeBtn}`);
  compSeq.push(randomeBtn);
  gameFlash(btn);
}

let userBtns = document.querySelectorAll(".btn");
for (btnss of userBtns) {
  btnss.addEventListener("click", function () {
    userFlash(this);
    userSeq.push(this.classList[1]);
    checkAns(userSeq.length - 1);
  });
}

function checkAns(last) {
  if (compSeq[last] === userSeq[last]) {
    if (userSeq.length == compSeq.length) {
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  } else {
    p.innerText = `Game over.Your score was ${level}. Restart the game`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    restart();
  }
}

function restart() {
  start = false;
  level = 0;
  compSeq = [];
  userSeq = [];
}

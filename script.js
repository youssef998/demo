// const clues = ["clue1", "clue2", "clue3"];
// let currentClue = 0;

// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => document.getElementById("question0").style.opacity = 1, 1000);   
//   setTimeout(() => document.getElementById("question1").style.opacity = 1, 4000);
//   setTimeout(() => document.getElementById("question2").style.opacity = 1, 5000);
// });

// function revealClues() {
//   if (currentClue < clues.length) {
//     document.getElementById(clues[currentClue]).style.opacity = 1;
//     currentClue++;
//   } else {
//     document.getElementById("finalReveal").style.opacity = 1;
//     document.getElementById("revealBtn").style.display = "none";
//     startHearts();
//   }
// }

// function startHearts() {
//   const hearts = document.querySelectorAll('.heart');
//   hearts.forEach((heart, i) => {
//     setTimeout(() => heart.style.animationPlayState = 'running', i * 1000);
//   });
// }
const clues = ["clue1", "clue2", "clue3"];
let currentClue = 0;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => document.getElementById("question0").style.opacity = 1, 1000);   
  setTimeout(() => document.getElementById("question1").style.opacity = 1, 4000);
  setTimeout(() => document.getElementById("question2").style.opacity = 1, 5000);
});

function revealClues() {
  if (currentClue < clues.length) {
    document.getElementById(clues[currentClue]).style.opacity = 1;
    currentClue++;
  }

  if (currentClue === clues.length) {
    document.getElementById("revealBtn").style.display = "none";
    document.getElementById("noticeBtn").style.display = "inline-block";
  }
}

function revealFinalMessage() {
  document.getElementById("finalReveal").style.opacity = 1;
  document.getElementById("noticeBtn").style.display = "none";
  startHearts();
}

function startHearts() {
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart, i) => {
    setTimeout(() => heart.style.animationPlayState = 'running', i * 1000);
  });
}

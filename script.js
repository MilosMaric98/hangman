let promptWord = prompt("Unesi rec: ");
let word = promptWord.valueOf().toLowerCase();
console.log(word);
let wordArray = word.split("");
console.log(wordArray);

let wordValue = document.querySelector(".word");
let letters = document.querySelector(".letters");
let life = document.querySelector(".life");
let endBtn = document.querySelector(".end-btn");
let endGame = document.querySelector(".game-end");
let endMessage = document.querySelector(".end-message");
let livesCounter = 5;
life.textContent = livesCounter;

for (let j = 0; j < word.length; j++) {
  let line = document.createElement("span");
  line.textContent = word[j];
  line.classList.add("disabled");
  line.classList.add("line");
  wordValue.appendChild(line);
}
let selectedLetters = [];
for (let i of "abcdefghijklmnopqrstuvwxyz") {
  let letter = document.createElement("button");
  letter.classList.add("letterClass");
  letter.textContent = i;
  letters.appendChild(letter);

  letter.addEventListener("click", function () {
    let pressedWord = this.textContent;
    let lines = document.querySelectorAll(".line");
    let allLetters = document.querySelectorAll(".letterClass");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].innerHTML === pressedWord) {
        //console.log("true")
        lines[i].classList.remove("disabled");
        lines[i].classList.add("enable");
        letter.classList.add("disabled-letter");

        selectedLetters.push(lines[i].innerHTML);
        // console.log(selectedLetters)
      }
    }
    if (!word.includes(pressedWord)) {
      //console.log("false")
      livesCounter--;
      life.textContent = livesCounter;
      letter.classList.add("disabled-letter");
    }
    //let allLetters = document.querySelectorAll(".letterClass");
    if (livesCounter === 0) {
      endGame.classList.remove("disabled");
      endGame.classList.add("enable");

      for (let i = 0; i < allLetters.length; i++) {
        allLetters[i].classList.add("disabled-letter");
      }
      for (let j = 0; j < lines.length; j++) {
        lines[j].classList.add("enable");
      }
    }
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray.length === selectedLetters.length) {
        endGame.classList.remove("disabled");
        endGame.classList.add("enable");
        endMessage.textContent = "You Won!";
        for (let i = 0; i < allLetters.length; i++) {
          allLetters[i].classList.add("disabled-letter");
        }
        for (let j = 0; j < lines.length; j++) {
          lines[j].classList.add("enable");
        }
      }
    }
    console.log(selectedLetters);
  });
}

endBtn.addEventListener("click", function () {
  location.reload();
});

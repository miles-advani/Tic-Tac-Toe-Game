console.log("test");

const divs = document.querySelectorAll('.table div');
const divGameOver = document.querySelectorAll('.gameover');

let player = true;

divs.forEach(div => {
  div.addEventListener('click', () => {
    if (div.textContent === "0" && !gameOver(divs)) {
      if (player) {
        div.textContent = '1 ';
        player = false;
      } else {
        div.textContent = '2 ';
        player = true;
      }
    }
    let d = false;
    d = draw(divs);

    gameOver(divs);
    if (d) {
      divGameOver[0].textContent = "Its a DRAW, who would have thought ...😱"
    }
  });
});

function draw(divs) {
  let b = true;

  divs.forEach(div => {
    console.log(div.textContent);
    if (div.textContent == "0") {
      b = false;
    }

  });
  return b;

}

function gameOver(divs) {
  // PLAYER 1
  // first column player 1
  if ((divs[0].textContent == "1 " && divs[3].textContent == "1 " && divs[6].textContent == "1 ") ||
    // second column player 1
    (divs[1].textContent == "1 " && divs[4].textContent == "1 " && divs[7].textContent == "1 ") ||
    // third column player 1
    (divs[2].textContent == "1 " && divs[5].textContent == "1 " && divs[8].textContent == "1 ") ||
    // first row player 1
    (divs[0].textContent == "1 " && divs[1].textContent == "1 " && divs[2].textContent == "1 ") ||
    // second row player1
    (divs[3].textContent == "1 " && divs[4].textContent == "1 " && divs[5].textContent == "1 ") ||
    // third row player1
    (divs[6].textContent == "1 " && divs[7].textContent == "1 " && divs[8].textContent == "1 ") ||
    // diagonal left to right player1
    (divs[6].textContent == "1 " && divs[4].textContent == "1 " && divs[2].textContent == "1 ") ||
    // diagonal right to left player1
    (divs[8].textContent == "1 " && divs[4].textContent == "1 " && divs[0].textContent == "1 ")) {
    divGameOver[0].textContent = "player 1 wins 🌟"
    return true;
  }

  // PLAYER 2
  // first column player 2
  if ((divs[0].textContent == "2 " && divs[3].textContent == "2 " && divs[6].textContent == "2 ") ||
    // second column player 2
    (divs[1].textContent == "2 " && divs[4].textContent == "2 " && divs[7].textContent == "2 ") ||
    // third column player 2
    (divs[2].textContent == "2 " && divs[5].textContent == "2 " && divs[8].textContent == "2 ") ||
    // first row player 2
    (divs[0].textContent == "2 " && divs[1].textContent == "2 " && divs[2].textContent == "2 ") ||
    // second row player2
    (divs[3].textContent == "2 " && divs[4].textContent == "2 " && divs[5].textContent == "2 ") ||
    // third row player2
    (divs[6].textContent == "2 " && divs[7].textContent == "2 " && divs[8].textContent == "2 ") ||
    // diagonal left to right player2
    (divs[6].textContent == "2 " && divs[4].textContent == "2 " && divs[2].textContent == "2 ") ||
    // diagonal right to left player2
    (divs[8].textContent == "2 " && divs[4].textContent == "2 " && divs[0].textContent == "2 ")) {
    divGameOver[0].textContent = "player 2 wins 🌟"
    return true;
  }

  return false;
};

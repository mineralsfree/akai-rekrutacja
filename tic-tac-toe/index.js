let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin(turn === "x" ? "o" : "x", idx % 3, Math.floor(idx / 3));
});

function displayTurn(turn) {
  document.querySelector('.turn').innerText = `${turn} turn`
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
}

function checkWin(turn, x, y) {
  for (let i = 0; i < 3; i++) {
    if (symbols[x][i]!==turn)break;
    if (i === 2) {
      alert('win '+ turn);
      return
    }
  }
  for (let i = 0; i < 3; i++) {
    if (symbols[i][y]!==turn) break;
    if (i === 2) {
      alert('win '+ turn);
      return
    }
  }
  if (x===y){
    for (let i = 0; i < 3; i++) {
      if (symbols[i][i]!==turn) break;
      if (i === 2) {
        alert('win '+ turn);
        return
      }
    }
  }
  if (x+y===2){
    for (let i = 0; i <3 ; i++) {
      if(symbols[i][2-i] !== turn) break;
      if (i === 2) {
        alert('win '+ turn);
        return
      }
    }
  }

  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
}
document.querySelector('.reset').addEventListener('click', ()=>reset())
// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  const childs = [...board.children]
  childs.forEach(child=>{
    child.classList = 'tile';
  })
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  turn = "x";
  // 4. zresetuj stan gry
}

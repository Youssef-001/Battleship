import Board from "./gameBoard";
import Player from "./Player";

function render(player) {
  let id = player.id;
  console.log(id);

  let board = player.board.board;
  console.log(board);
  console.log(player.board.attacked_ship_cells);

  let board_div;

  if (player.id == 1) {
    board_div = document.querySelector(".board-1");
  } else {
    board_div = document.querySelector(".board-2");
  }

  for (let i = 0; i < 10; i++) {
    let divRow = document.createElement("div");
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.id = `${i} ${j}`;
      if (board[i][j] == 0) cell.classList.add("empty");
      else if (board[i][j] == -1) cell.classList.add("miss");
      else {
        if (board[i][j].isSunk() == true) cell.classList.add("destroy");
        else if (player.board.attacked_ship_cells.includes([i, j])) {
          cell.classList.add("hit");
        } else cell.classList.add("ship");
      }
      divRow.appendChild(cell);
    }
    console.log(board_div);
    board_div.appendChild(divRow);
  }
}

export default render;

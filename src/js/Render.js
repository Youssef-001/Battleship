import Board from "./gameBoard";
import Player from "./Player";

function changeCellClass(cell, player, r, c) {
  let board = player.board.board;
  if (board[r][c] == 0) cell.className = "empty";
  else if (board[r][c] == -1) cell.className = "miss";
  else {
    if (board[r][c].isSunk() == true) {
      cell.className = "destroy";
      return cell;
    }

    let flag = false;
    let attacked = player.board.attacked_ship_cells;

    for (let i = 0; i < attacked.length; i++) {
      if (attacked[i][0] == r && attacked[i][1] == c) {
        flag = true;
        break;
      }
    }

    if (flag) {
      cell.className = "hit";
    } else if (player.id != 2) cell.className = "ship";
    else cell.className = "empty";
  }
  console.log("new cell", board[r][c]);
  return cell;
}

function renderBoard(player) {
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
      cell = changeCellClass(cell, player, i, j);
      divRow.appendChild(cell);
    }
    console.log(board_div);
    board_div.appendChild(divRow);
  }
}

function updateCell(id, cell, player, r, c) {
  let board_div;
  if (id == 1) board_div = document.querySelector(".board-1");
  else board_div = document.querySelector(".board-1");

  cell = changeCellClass(cell, player, r, c);
}

function shipSink(id, player, coordinates) {
  let board_div;
  if (id == 1) board_div = document.querySelector(".board-1");
  else board_div = document.querySelector(".board-1");

  for (let i = 0; i < coordinates.length; i++) {
    console.log(coordinates[i]);
    let cord = coordinates[i].toString();
    cord = cord.replace(",", " ");
    let elem = board_div.querySelector(`[id='${cord}']`);
    updateCell(id, elem, player, coordinates[i][0], coordinates[i][1]);
  }
}

export { renderBoard, updateCell, shipSink };

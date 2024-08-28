import Player from "./js/Player";
import { renderBoard, updateCell, shipSink } from "./js/Render";
import style from "./styles/style.css";
let player1 = new Player();

renderBoard(player1);
let computer = new Player();
console.log(player1.board.board);
renderBoard(computer);

// TODO: only empty and ship will have eventlistener with click.
let turn = true;

function Game(player1, computer) {
  let board_div1;
  let board_div2;

  board_div1 = document.querySelector(".board-2");
  board_div2 = document.querySelector(".board-1");

  let cells1 = [];
  let cells2 = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cord = `${i} ${j}`;
      console.log("cord: ", cord);
      let elem = board_div1.querySelector(`[id='${cord}']`);
      let elem2 = board_div2.querySelector(`[id='${cord}']`);

      if (
        computer.board.board[i][j] == 0 ||
        !computer.board.isAttacked(computer, i, j)
      )
        cells1.push(elem);
      if (
        player1.board.board[i][j] == 0 ||
        !player1.board.isAttacked(computer, i, j)
      )
        cells2.push(elem2);
    }
  }
  function handleCellClick(e) {
    let currentPlayer;
    let id;
    if (turn == true) {
      currentPlayer = player1;
      id = 1;
    } else {
      currentPlayer = computer;
      id = 2;
    }

    console.log(e.target.className);
    let cord = e.target.id.split(" ");
    if (currentPlayer.board.board[cord[0]][cord[1]] == 0) {
      currentPlayer.board.board[cord[0]][cord[1]] = -1;
      updateCell(id, e.target, currentPlayer, cord[0], cord[1]);
      turn = !turn;
      console.log(e.target);
      updateListeners();
    }
  }

  function updateListeners() {
    if (turn) {
      cells2.forEach((cell) => {
        cell.removeEventListener("click", handleCellClick);
      });

      cells1.forEach((cell) => {
        cell.addEventListener("click", handleCellClick);
      });
    } else {
      cells1.forEach((cell) => {
        cell.removeEventListener("click", handleCellClick);
      });

      cells2.forEach((cell) => {
        cell.addEventListener("click", handleCellClick);
      });
    }
  }

  updateListeners();
}

Game(player1, computer);

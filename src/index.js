import Player from "./js/Player";
import { renderBoard, updateCell, shipSink, renderWinner } from "./js/Render";
import style from "./styles/style.css";
import { computerMove, randomizeShip } from "./js/utility";
function playGame(bot) {
  document.querySelector(".page").remove();
  let player1 = new Player();

  renderBoard(player1);
  let computer;
  if (bot) computer = new Player(true);
  else computer = new Player();
  renderBoard(computer);

  let turn = true;

  function Start(player1, computer) {
    let board_div1;
    let board_div2;

    board_div1 = document.querySelector(".board-2");
    board_div2 = document.querySelector(".board-1");

    let cells1 = [];
    let cells2 = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cord = `${i} ${j}`;
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
      let target;

      if (e.target == undefined) target = e;
      else target = e.target;

      let currentPlayer;
      let id;
      if (turn == true) {
        currentPlayer = player1;
        id = 1;
      } else {
        currentPlayer = computer;
        id = 2;
      }

      let otherPlayer;

      if (currentPlayer == player1) otherPlayer = computer;
      else otherPlayer = player1;

      let cord = target.id.split(" ");
      let attackedCell = otherPlayer.board.isAttacked(
        otherPlayer,
        cord[0],
        cord[1]
      );

      cord[0] = parseInt(cord[0]);
      cord[1] = parseInt(cord[1]);

      if (otherPlayer.board.board[cord[0]][cord[1]] == 0) {
        otherPlayer.board.board[cord[0]][cord[1]] = -1;
        turn = !turn;
        updateCell(id, target, otherPlayer, cord[0], cord[1]);
        if (player1.isBot == true || computer.isBot == true) updateListeners2();
        else updateListeners();
      } else if (!attackedCell) {
        otherPlayer.board.attacked_ship_cells.push([cord[0], cord[1]]);
        let currentShip = otherPlayer.board.board[cord[0]][cord[1]];
        currentShip.hit();
        updateCell(id, target, otherPlayer, cord[0], cord[1]);
        if (turn) id = 1;
        else id = 2;

        if (currentShip.isSunk()) {
          console.log("A ship has been destroyed");
          currentShip.coordinates.forEach((c) => {
            let cell = otherPlayer.board.getCell(id, c[0], c[1]);
            updateCell(id, cell, otherPlayer, c[0], c[1]);
          });

          if (otherPlayer.board.allSunk()) {
            console.log(`player ${otherPlayer.id} won!!`);
            renderWinner(id);
            if (computer.isBot == true || player1.isBot == true) {
              updateListeners2(true);
            } else updateListeners(true, null);
          }
        }
      }
    }

    function updateListeners(flag = null, bot = null) {
      if (flag) {
        cells2.forEach((cell) => {
          cell.removeEventListener("click", handleCellClick);
        });

        cells1.forEach((cell) => {
          cell.removeEventListener("click", handleCellClick);
        });
        return;
      }
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

    function updateListeners2(end = null) {
      if (end == true) {
        cells1.forEach((cell) => {
          cell.removeEventListener("click", handleCellClick);
        });

        cells2.forEach((cell) => {
          cell.removeEventListener("click", handleCellClick);
        });
        return;
      }
      if (turn) {
        cells1.forEach((cell) => {
          cell.addEventListener("click", handleCellClick);
        });
      } else {
        cells1.forEach((cell) => {
          cell.removeEventListener("click", handleCellClick);
        });
      }

      if (computer.isBot === true && !turn) {
        setTimeout(() => {
          let ind = computerMove();
          let coord = ind.toString().replace(",", " ");
          let div1 = document.querySelector(".board-1");
          let element = div1.querySelector(`[id='${coord}']`);

          handleCellClick(element);

          if (!turn) {
            if (computer.board.allSunk()) {
              updateListeners2(true);
            } else updateListeners2();
          }
        }, 600);
      }
    }

    updateListeners();
  }

  Start(player1, computer);
}
let multiplayerButton = document.querySelector(".player2");
let botButton = document.querySelector(".bot");

multiplayerButton.addEventListener("click", () => {
  playGame();
});

botButton.addEventListener("click", () => {
  playGame(true);
});

// playGame(true);

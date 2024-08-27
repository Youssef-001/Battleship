import Player from "./js/Player";
import { renderBoard, updateCell, shipSink } from "./js/Render";
import style from "./styles/style.css";
let player1 = new Player();

renderBoard(player1);
let computer = new Player();
console.log(player1.board.board);
renderBoard(computer);

// player1.board.attacked_ship_cells.push([3, 0]);
// player1.board.attacked_ship_cells.push([3, 1]);
// player1.board.attacked_ship_cells.push([3, 2]);

// shipSink(1, player1, [
//   [3, 0],
//   [3, 1],
//   [3, 2],
// ]);

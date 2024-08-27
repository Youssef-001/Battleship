import Ship from "../js/Ship";
import Board from "../js/gameBoard";

let id = 1;

class Player {
  constructor() {
    this.board = new Board();
    this.id = id;
    id++;
  }
}
export default Player;

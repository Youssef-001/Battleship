import Ship from "../js/Ship";
import Board from "../js/gameBoard";

let id = 1;

class Player {
  constructor(isBot = false) {
    this.board = new Board();
    this.id = id;
    this.isBot = isBot;
    id++;
  }
}
export default Player;

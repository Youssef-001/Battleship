import ship from "./Ship";

class Board {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.attacked_ship_cells = [];
    let ship1 = new ship(5);
    let ship2 = new ship(4);
    let ship3 = new ship(3);
    for (let i = 0; i < 5; i++) {
      this.board[1][i] = ship1;
      ship1.coordinates.push([1, i]);
    }

    for (let i = 0; i < 4; i++) {
      this.board[2][i] = ship2;
      ship2.coordinates.push([2, i]);
    }

    for (let i = 0; i < 3; i++) {
      this.board[3][i] = ship3;
      ship3.coordinates.push([3, i]);
    }
    let shipArray = [ship1, ship2, ship3];
  }

  receiveAttack(r, c) {
    if (this.board[r][c] == 0) {
      // missed shot
      this.board[r][c] = -1;
    } else {
      this.board[r][c].hit();
      this.attacked_ship_cells.append([r, c]);
    }
  }

  allSunk() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j] != 0 && this.board[i][j] != -1) {
          let sunk = this.board[i][j].isSunk();
          if (sunk == false) {
            return false;
          }
        }
      }
    }

    return true;
  }
}

export default Board;

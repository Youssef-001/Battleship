import ship from "./Ship";

import { randomizeShip } from "./utility";

class Board {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.attacked_ship_cells = [];
    let ship1 = new ship(5);
    let ship2 = new ship(4);
    let ship3 = new ship(3);
    this.board = randomizeShip(this.board, 5, ship1);
    this.board = randomizeShip(this.board, 4, ship2);
    this.board = randomizeShip(this.board, 3, ship3);
    // for (let i = 0; i < 5; i++) {
    //   this.board[1][i] = ship1;
    //   ship1.coordinates.push([1, i]);
    // }

    // for (let i = 0; i < 4; i++) {
    //   this.board[2][i] = ship2;
    //   ship2.coordinates.push([2, i]);
    // }

    // for (let i = 0; i < 3; i++) {
    //   this.board[3][i] = ship3;
    //   ship3.coordinates.push([3, i]);
    // }
    this.shipArray = [ship1, ship2, ship3];
  }

  receiveAttack(r, c) {
    if (this.board[r][c] == 0) {
      // missed shot
      this.board[r][c] = -1;
    } else {
      this.board[r][c].hit();
      this.attacked_ship_cells.push([r, c]);
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

  isAttacked(player, r, c) {
    let attackedCells = player.board.attacked_ship_cells;
    for (let i = 0; i < attackedCells.length; i++) {
      if (attackedCells[i][0] == r && attackedCells[i][1] == c) {
        return true;
      }
    }
    return false;
  }

  getCell(id, r, c) {
    let div;
    if (id == 1) {
      div = document.querySelector(".board-2");
    } else div = document.querySelector(".board-1");

    let cord = `${r} ${c}`;
    let element = div.querySelector(`[id='${cord}']`);
    console.log(element);
    return element;
  }
}

export default Board;

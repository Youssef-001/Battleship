function computerMove(computer = null) {
  let div = document.querySelector(".board-1");

  let validCells = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cord = [i, j].toString().replace(",", " ");
      let elem2 = div.querySelector(`[id='${cord}']`);

      if (elem2.className == "empty" || elem2.className == "ship")
        validCells.push([i, j]);
    }
  }

  let ind = Math.floor(Math.random() * validCells.length);

  return validCells[ind];
}

function randomizeShip(board, length, ship) {
  let loop = true;
  while (loop) {
    let direction = Math.random() < 0.5 ? 1 : 2;
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);

    let flag = true;
    if (direction == 1) {
      if (row + length >= 10) continue;
      for (let i = 0; i < length; i++) {
        if (row + i < 10) {
          if (board[row + i][col] != 0) {
            flag = false;
            break;
          }
        }
      }

      if (flag) {
        for (let i = 0; i < length; i++) {
          if (row + i < 10) board[row + i][col] = ship;
          ship.coordinates.push([row + i, col]);
        }
        return board;
      }

      flag = true;

      for (let i = 0; i < length; i++) {
        if (row - i >= 0) {
          if (board[row - i][col] != 0) {
            flag = false;
            break;
          }
        }
      }
      if (row - length < 0) continue;
      if (flag) {
        for (let i = 0; i < length; i++) {
          if (row - i >= 0) {
            board[row - i][col] = ship;
            loop = false;
            ship.coordinates.push([row - i, col]);
          }
        }
        return board;
      }
    } else {
      if (col + length >= 10) continue;
      for (let i = 0; i < length; i++) {
        if (col + i < 10) {
          if (board[row][col + i] != 0) {
            flag = false;
            break;
          }
        }
      }

      if (flag) {
        for (let i = 0; i < length; i++) {
          if (col + i < 10) {
            board[row][col + i] = ship;
            loop = false;
            ship.coordinates.push([row, col + i]);
          }
        }
        return board;
      }
      flag = true;

      for (let i = 0; i < length; i++) {
        if (col - i >= 0) {
          if (board[row][col - i] != 0) {
            flag = false;
            break;
          }
        }
      }

      if (col - length < 0) continue;
      if (flag) {
        for (let i = 0; i < length; i++) {
          if (col - i >= 0) {
            board[row][col - i] = ship;
            loop = false;
            ship.coordinates.push([row, col - i]);
          }
        }
        return board;
      }
    }
  }
}

export { computerMove, randomizeShip };

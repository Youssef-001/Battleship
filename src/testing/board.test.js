import Board from "../js/gameBoard";

test("Test ship placement", () => {
  let board = new Board();

  expect(board.board[1][1]).toHaveProperty("hit");
});

test("Test ship lives", () => {
  let board = new Board();

  expect(board.board[1][1].lives).toBe(5);
});

test("Test if ship isn't sunk", () => {
  let board = new Board();

  expect(board.board[1][1].isSunk()).toBeFalsy();
});

test("Test ship hit", () => {
  let board = new Board();

  expect(board.board[3][1].hit()).toBe(2);
});

test("Test if ship sunk", () => {
  let board = new Board();
  for (let i = 0; i < 5; i++) {
    board.board[1][i].hit();
  }
  expect(board.board[1][1].isSunk()).toBeTruthy();
});

test("Test if all ships sank", () => {
  let board = new Board();
  for (let i = 0; i < 5; i++) {
    board.board[1][i].hit();
  }
  for (let i = 0; i < 4; i++) {
    board.board[2][i].hit();
  }
  for (let i = 0; i < 3; i++) {
    board.board[3][i].hit();
  }
  expect(board.allSunk()).toBeTruthy();
});

test("Test if all ships not sank", () => {
  let board = new Board();
  for (let i = 0; i < 5; i++) {
    board.board[1][i].hit();
  }
  for (let i = 0; i < 4; i++) {
    board.board[2][i].hit();
  }
  // leave ship on row 4
  expect(board.allSunk()).toBeFalsy();
});

import Board from "../js/gameBoard";

let board = new Board();
let shipArray = board.shipArray;
let firstShip = shipArray[0];
let firstCord = firstShip.coordinates[0];

test("Test ship placement", () => {
  expect(board.board[firstCord[0]][firstCord[1]]).toHaveProperty("hit");
});

test("Test ship lives", () => {
  expect(shipArray[0].lives).toBe(5);
});

test("Test if ship isn't sunk", () => {
  expect(firstShip.isSunk()).toBeFalsy();
});

test("Test ship hit", () => {
  expect(firstShip.hit()).toBe(4);
});

test("Test if ship sunk", () => {
  let secondShip = board.shipArray[1].coordinates[0];
  for (let i = 0; i < 4; i++) {
    firstShip.hit();
  }

  expect(firstShip.isSunk()).toBeTruthy();
});

test("Test if all ships sank", () => {
  let board = new Board();
  let ship1 = board.shipArray[0].coordinates;
  let ship2 = board.shipArray[1].coordinates;
  let ship3 = board.shipArray[2].coordinates;

  for (let i = 0; i < 5; i++) {
    let cord = ship1[i];
    board.board[cord[0]][cord[1]].hit();
  }
  for (let i = 0; i < 4; i++) {
    let cord = ship2[i];
    board.board[cord[0]][cord[1]].hit();
  }
  for (let i = 0; i < 3; i++) {
    let cord = ship3[i];
    board.board[cord[0]][cord[1]].hit();
  }
  expect(board.allSunk()).toBeTruthy();
});

test("Test if all ships not sank", () => {
  let board = new Board();
  let ship1 = board.shipArray[0].coordinates;
  let ship2 = board.shipArray[1].coordinates;
  for (let i = 0; i < 5; i++) {
    let cord = ship1[i];
    board.board[cord[0]][cord[1]].hit();
  }
  for (let i = 0; i < 4; i++) {
    let cord = ship2[i];
    board.board[cord[0]][cord[1]].hit();
  }
  // leave third ship
  expect(board.allSunk()).toBeFalsy();
});

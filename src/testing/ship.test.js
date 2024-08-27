import ship from "../js/Ship";

test("Test ship constructor", () => {
  let newShip = new ship(5);
  expect(newShip.hit()).toBe(4);
});

test("Test if ship isn't sunk", () => {
  let newShip = new ship(3);
  expect(newShip.isSunk()).toBeFalsy();
});

test("Test if ship is sunk", () => {
  let newShip = new ship(2);
  newShip.hit();
  newShip.hit();

  expect(newShip.isSunk()).toBeTruthy();
});

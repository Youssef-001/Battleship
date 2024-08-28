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

export default computerMove;

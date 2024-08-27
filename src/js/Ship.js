class Ship {
  constructor(length, lives = length) {
    this.length = length;
    this.lives = lives;
  }

  hit() {
    this.lives -= 1;
    return this.lives;
  }

  isSunk() {
    if (this.lives <= 0) {
      return true;
    } else return false;
  }
}

export default Ship;

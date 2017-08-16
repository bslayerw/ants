const HEADINGS = ["N", "E", "S", "W"];
class Ant {
  constructor(grid, heading = "N") {
    this.coord = {
      x: 2,
      y: 2
    };
    this.grid = grid;
    this.heading = heading;
    this.headingIndex = HEADINGS.indexOf(this.heading);
    this.headingOperators = {
      N: object => {
        object.y -= 1;
      },
      E: object => {
        object.x += 1;
      },
      S: object => {
        object.y += 1;
      },
      W: object => {
        object.x -= 1;
      }
    };
  }
  rotate(direction = 1) {
    this.headingIndex = (this.headingIndex + direction) % HEADINGS.length;
    if (this.headingIndex < 0) {
      this.headingIndex = HEADINGS.length - 1;
    }
    this.heading = HEADINGS[this.headingIndex];
    return this;
  }
  simulateStep(step = 1) {
    for (let i = 0; i < step; i++) {
      const currentSymbol = this.getSymbol();
      if (currentSymbol === "O") {
        this.rotate(-1);
      } else {
        this.rotate(1);
      }
      this.moveForward();
    }
  }

  getSymbol() {
    return this.grid[this.coord.y][this.coord.x];
  }

  isOccupied() {
    return this.getSymbol() === "0";
  }
  setOccupied(val = true) {
    this.grid[this.coord.y][this.coord.x] = val ? "O" : "E";
  }
  toggleOccupied() {
    this.setOccupied(!this.isOccupied());
  }

  moveForward() {
    this.toggleOccupied();
    const op = this.headingOperators[this.heading];
    if (op) {
      op(this.coord);
    } else {
      console.error(`unknown heading ${this.heading}`);
    }
    return this;
  }
}

let antGrid = [
  ["E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E"],
  ["E", "E", "E", "E", "E"]
];

module.exports = {
  Ant: Ant,
  Grid: antGrid,
  PrintGrid: grid => {
    for (let i = 0; i < grid.length; i++) {
      console.log(("", grid[i]));
    }
  }
};

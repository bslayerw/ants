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
    switch (this.heading) {
      case "E":
        this.coord.x += 1;
        break;
      case "W":
        this.coord.x -= 1;
        break;
      case "N":
        this.coord.y -= 1;
        break;
      case "S":
        this.coord.y += 1;
        break;
      default:
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

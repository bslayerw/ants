const stuff = require("../ant");

let Ant = stuff.Ant;
let grid = stuff.Grid;
let printGrid = stuff.PrintGrid;
function resetGrid() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      grid[i][j] = "E";
    }
  }
}
describe("testing ant movement", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    resetGrid();
  });

  test("Ant# rotate right", () => {
    const ant = new Ant(grid);
    expect(ant.heading).toBe("N");
    ant.rotate();
    expect(ant.heading).toBe("E");
  });

  test("Ant# rotate left", () => {
    const ant = new Ant(grid);
    expect(ant.heading).toBe("N");
    ant.rotate(-1);
    expect(ant.heading).toBe("W");
  });

  test("Ant# move forward N", () => {
    const ant = new Ant(grid);
    expect(ant.heading).toBe("N");
    expect(ant.coord).toEqual({ x: 2, y: 2 });
    // ant is heading north so moving it forward should shift it up
    // a row
    ant.moveForward();
    expect(ant.coord).toEqual({ x: 2, y: 1 });
    expect(ant.heading).toBe("N");
  });

  test("Ant# move rotate and move forward E", () => {
    const ant = new Ant(grid);
    expect(ant.heading).toBe("N");
    expect(ant.coord).toEqual({ x: 2, y: 2 });
    // ant is heading north so moving it forward should shift it up
    // a row
    ant.rotate();
    expect(ant.heading).toBe("E");

    ant.moveForward();
    expect(ant.coord).toEqual({ x: 3, y: 2 });
    expect(ant.heading).toBe("E");
  });

  test("Ant# move full circle", () => {
    const ant = new Ant(grid);
    expect(ant.heading).toBe("N");
    expect(ant.coord).toEqual({ x: 2, y: 2 });
    // ant is heading north so moving it forward should shift it up
    // a row
    ant.rotate();
    expect(ant.heading).toBe("E");

    ant.moveForward();
    expect(ant.coord).toEqual({ x: 3, y: 2 });
    expect(ant.heading).toBe("E");

    // make sure the previous grid is now occupied
    expect(grid[ant.coord.x - 1][ant.coord.y]).toEqual("O");

    ant.rotate();
    expect(ant.heading).toBe("S");

    ant.moveForward();
    expect(ant.coord).toEqual({ x: 3, y: 3 });
    expect(ant.heading).toBe("S");
    expect(grid[ant.coord.x - 1][ant.coord.y - 1]).toEqual("O");
    ant.rotate();
    expect(ant.heading).toBe("W");

    ant.moveForward();
    expect(ant.coord).toEqual({ x: 2, y: 3 });
    expect(ant.heading).toBe("W");
    expect(grid[ant.coord.x + 1][ant.coord.y]).toEqual("O");
    ant.rotate();
    expect(ant.heading).toBe("N");

    ant.moveForward();
    expect(ant.coord).toEqual({ x: 2, y: 2 });
    expect(ant.heading).toBe("N");
    expect(grid[ant.coord.x][ant.coord.y + 1]).toEqual("O");
  });
  test("Ant# move 8 steps", () => {
    const ant = new Ant(grid);
    ant.simulateStep(8);
    printGrid(grid);
  });

  test("Grid# move full circle", () => {});

  describe("testing ant movement", () => {
    beforeEach(() => {
      resetGrid();
    });
  });
});

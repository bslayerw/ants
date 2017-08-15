const stuff = require("./ant");

let Ant = stuff.Ant;
let grid = stuff.Grid;
let printGrid = stuff.PrintGrid;

const ant = new Ant(grid);
ant.simulateStep(8);
printGrid(grid);

// Import dialog js to be able to get inputs from the cli sequentially

const dialogInputs = require("./dialog")




// Pass input through a function that builds a grid based on them

const generateGrid = (grid, coordinateX, coordinateY) => {
	for (let i = 0; i < coordinateX; i++) {
		grid[i] = [];
		for (let j = 0; j < coordinateY; j++) {
			grid[i][j] = "O";
		}
	}
	console.log(grid);
	console.log("==========================================");
	console.log("Grid generated. Please supply more inputs");
	return grid;
};



const initialPosition = (coordinateX, coordinateY, orientation) => {
	console.log(
		`The robot has landed in ${coordinateX} - ${coordinateY} and is looking ${orientation}`
	);
	robot = { x: coordinateX, y: coordinateY, orientation: orientation };
	return robot;
};




// Set promise


const updateGrid =  () =>{
  dialogInputs.firstInput(grid)
  console.log(grid)
}



updateGrid()


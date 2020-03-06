// Pass input through a function that builds a grid based on them
const generateGrid = (grid, coordinateX, coordinateY) => {
	for (let i = 0; i < coordinateX; i++) {
		grid[i] = [];
		for (let j = 0; j < coordinateY; j++) {
			grid[i][j] = "O";
		}
	}

	console.log("==========================================");
	console.log("Grid generated. Please supply more inputs");
	
  return grid;
  
};

module.exports = {
	generateGrid,
};



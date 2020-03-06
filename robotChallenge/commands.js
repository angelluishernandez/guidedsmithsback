const fs = require("fs");
const gridLogic = require("./test/grid");
const robotLogic = require("./test/robot");

const grid = (coordinateX, coordinateY) => {
	let gridCoordinates = [];
	let grid = [];

	console.log("Generating grid=> ", coordinateX, coordinateY);

	// Reading gridCoordinates JSON
	try {
		gridCoordinates = JSON.parse(fs.readFileSync("gridCoordinates.json"));
	} catch (error) {
		console.log(error);
	}

	// Generating gridCoordinates JSON

	let index = gridCoordinates.findIndex(
		element => element.x === coordinateX && element.y === coordinateY
	);
	if (index === -1) {
		gridCoordinates.push({ coordinateX, coordinateY });
	} else {
		console.log("A grid was already generated");
	}

	fs.writeFileSync("gridCoordinates.json", JSON.stringify(gridCoordinates));

	// Passing gridCoordinates JSON elements to the grid generation function

	gridLogic.generateGrid(
		grid,
		gridCoordinates[0].coordinateX,
		gridCoordinates[0].coordinateY
	);
	console.log(grid);
};




const generateRobotPosition = (coordinateX, coordinateY, orientation) => {
	const robotData = [];

	try {
		robotData = JSON.parse(fs.readFileSync("robotData.json"));
	} catch (error) {
		console.log(error);
	}
	let index = robotData.findIndex(
		element =>
			element.x === coordinateX &&
			element.y === coordinateY &&
			element.orientation === orientation
	);
	if (index === -1) {
		robotData.push({coordinateX, coordinateY, orientation});
	}
	fs.writeFileSync("robotData.json", JSON.stringify(robotData));
	robotLogic.initialPosition(
		robotData[0].coordinateX,
		robotData[0].coordinateY,
		robotData[0].orientation, 
		index
	);
};

const moveRobot = (commands) => {
	const robotOrders = []
	try{
		robotOrders = JSON.parse(fs.readFileSync("robotMovementData"))
	}catch(error){
		console.log(error)
	}



}

module.exports = {
	grid,
	generateRobotPosition,
};


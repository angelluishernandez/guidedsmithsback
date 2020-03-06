const fs = require("fs");
const yargs = require("yargs");

// robot Object Goes Here
// ======================
let grid = [];

let gridCoordinates = [];
const robot = {
	direction: "N",
	y: 0,
	x: 0,
};

// ======================

// Data Storage

const generateGridStorage = (coordinateX, coordinateY) => {
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
		robot.push({ coordinateX, coordinateY, orientation });
	}
	fs.writeFileSync("robotData.json", JSON.stringify(robotData));
}


// Grid

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

//======================================

// Turn left function

const turnLeft = () => {
	console.log("turnLeft was called!");
	switch (robot.direction) {
		case "N":
			robot.direction = "W";
			break;
		case "E":
			robot.direction = "N";
			break;
		case "S":
			robot.direction = "E";
			break;
		case "W":
			robot.direction = "S";
			break;
	}
	console.log(`robot is now facing ${robot.direction}`);
};
//======================================

// Turn right function

const turnRight = () => {
	console.log("turnRight was called!");
	switch (robot.direction) {
		case "N":
			robot.direction = "E";
			break;
		case "E":
			robot.direction = "S";
			break;
		case "S":
			robot.direction = "W";
			break;
		case "W":
			robot.direction = "N";
			break;
	}
	console.log(`robot is now facing ${robot.direction}`);
};
//======================================

// Move forward function

const moveForward = () => {

	if (robot.x <= 10 && robot.y <= 10) {
		if (robot.direction === "N") {
			robot.y -= 1;
		}
		if (robot.direction === "W") {
			robot.x -= 1;
		}
		if (robot.direction === "S") {
			robot.y += 1;
		}
		if (robot.direction === "E") {
			robot.x += 1;
		}
		console.log("moveForward was called");
		console.log(
			`The current position of the robot is x: ${robot.x} / y: ${robot.y}`
		);
	}
	// If the robot reaches the limit it won't move any further
	else {
		console.log("The robot has reached the limit");
	}
};
//======================================

// Move backwards function

const moveBackwards = () => {
	if (robot.x <= 10 && robot.y <= 10) {
		if (robot.direction === "N") {
			robot.y += 1;
		}
		if (robot.direction === "W") {
			robot.x += 1;
		}
		if (robot.direction === "S") {
			robot.y -= 1;
		}
		if (robot.direction === "E") {
			robot.x -= 1;
		}
		console.log("moveForward was called");
		console.log(
			`The current position of the robot is x: ${robot.x} / y: ${robot.y}`
		);
	} else {
		console.log("The robot has reached the limit");
	}
};
//======================================
// Command function

const move = commands => {
	// Loop that checks if there's an obstacle on the way.
	// If so it will prevent the robot from moving.
	for (i = 0; i < commands.length; i++) {
		if (grid[robot.x][robot.y] === grid[cols][rows]) {
			grid[robot.x][robot.y] = "O";
			console.log("The robot has encountered an obstacle and has stoped");
			break;
		}
		if (grid[robot.x][robot.y] !== grid[cols][rows]) {
			if (commands[i] === "r") {
				turnRight();
			} else if (commands[i] === "f") {
				moveForward();
			} else if (commands[i] === "l") {
				turnLeft();
			} else if (commands[i] === "b") {
				moveBackwards();
			}
		}
		// If other commands is attempted, the console will return an error.
		else {
			console.log("Invalid command");
		}
	}
};


// Yargs

if (typeof yargs.argv._[0] === "number" && yargs.argv._.length === 2) {
	const coordinateX = yargs.argv._[0];
	const coordinateY = yargs.argv._[1];
	generateGridStorage(coordinateX, coordinateY);
	gridCoordinates.push(JSON.parse(fs.readFileSync("gridCoordinates.json")));
} else if (typeof yargs.argv._[0] === "number" && yargs.argv._.length === 3) {
	const coordinateX = yargs.argv._[0];
	const coordinateY = yargs.argv._[1];
	const orientation = yargs.argv._[2];

	commands.generateRobotPosition(coordinateX, coordinateY, orientation);
	robot.push(JSON.parse(fs.readFileSync("robotData.json")));
}

console.log(grid)
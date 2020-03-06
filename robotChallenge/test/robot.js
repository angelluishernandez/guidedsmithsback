const initialPosition = (coordinateX, coordinateY, orientation, index) => {
	console.log(
		`The robot # ${index + 1} has landed in ${coordinateX} - ${coordinateY} and is looking ${orientation}`
	);
	
};

// Instruction functions



const turnLeft = (direction, robot, index) => {
	switch (direction) {
		case "N":
			robot[index].direction = "W";
			break;
		case "W":
			robot[index].direction = "S";
			break;
		case "S":
			robot[index].direction = "E";
			break;
		case "E":
			robot[index].direction = "N";
	}
	// console.log("The robot has turned L");
};

const turnRight = (direction, robot, index )=> {
  console.log("entra ", direction, robot)
	switch (direction) {
		case "N":
			robot[index].direction = "E";
			break;
		case "E":
			robot[index].direction = "S";
			break;
		case "S":
			robot[index].direction = "W";
			break;
		case "W":
			robot[index].direction = "N";
	}
	// console.log("The robot has turned R");
};

const moveForward = (direction, robot ) => {
	switch (direction) {
		case "N":
			robot[index].coordinateX = robot[index].coordinateX + 1;
			break;
		case "S":
			robot[index].coordinateX = robot[index].coordinateX - 1;
		case "W":
			robot[index].coordinateY = robot[index].coordinateY - 1;
		case "E":
			robot[index].coordinateY = robot[index].coordinateY + 1;
	}
	// console.log("The robot has moved Forward");
};

// Commands execution

const executeCommands = (order, robot, index) => {
	console.log(order, robot)
	switch (order) {
		case "F":
			moveForward(robot[index].orientation, robot, index);
			break;
		case "R":
			turnRight(robot[index].orientation, robot, index);
			break;
		case "L":
			turnLeft(robot[index].orientation, robot, index);
	}
};

module.exports = {
	initialPosition,
	turnLeft,
	turnRight,
	moveForward,
	executeCommands,
};

const yargs = require("yargs");
const fs = require("fs");
const commands = require("./commands");
const robotLogic = require("./test/robot");

let gridCoordinates = [];
let robotData = [];

if (typeof yargs.argv._[0] === "number" && yargs.argv._.length === 2) {
	const coordinateX = yargs.argv._[0];
	const coordinateY = yargs.argv._[1];
	commands.grid(coordinateX, coordinateY);
	
} else if (typeof yargs.argv._[0] === "number" && yargs.argv._.length === 3) {
	const coordinateX = yargs.argv._[0];
	const coordinateY = yargs.argv._[1];
	const orientation = yargs.argv._[2];
	commands.generateRobotPosition(coordinateX, coordinateY, orientation, robotData.length);
	
	console.log("this is the robot counter=> ", robotCounter)
	
} else if (typeof yargs.argv._[0] === "string" && yargs.argv._.length <= 1) {
	let robotCurrentPosition = JSON.parse(fs.readFileSync("robotData.json"))
	const grid = JSON.parse(fs.readFileSync("gridCoordinates.json"))

	console.log(robotCurrentPosition)

	
	yargs.argv._[0].split("").forEach(order => {
		let orderUpper = order.toLocaleUpperCase()
		if (orderUpper === "R" || orderUpper === "L" || orderUpper === "F") {
			robotLogic.executeCommands(orderUpper, robotCurrentPosition, robotCurrentPosition.index);
		} else {
			console.log("these orders are not valid");
		}
	});
}

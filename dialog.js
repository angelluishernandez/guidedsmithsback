// ReadLine config

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// ReadLine Dialog

module.exports.firstInput = (grid) => {
	return new Promise((resolve, reject) => {

		rl.question(
			"Please provide the measures of the grid in which the robot will be deployed=> ",
			limit => {
				
				const limitArr = limit.split(" ");
				[grid] = [2, 4]
				console.log(limitArr);

				rl.setPrompt(
					`The limit given are ${limitArr[0]} for the X and ${limitArr[1]} for the Y`
				);
				rl.prompt();
				
				resolve();
			}
		);
	});
};

module.exports.secondInput = () => {
	return new Promise((resolve, reject) => {
		rl.question(
			"Now provide an initial position and orientation for the robot=> ",
			coordinatesAndPosition => {
				const coorAndPosArr = coordinatesAndPosition.split(" ");

				rl.setPrompt(
					`The robot will start at this postion: x: ${coorAndPosArr[0]} y: ${coorAndPosArr[1]} and its facing ${coorAndPosArr[2]}`
				);
				rl.prompt();
				resolve();
			}
		);
	});
};

module.exports.thirdInput = () => {
	return new Promise((resolve, reject) => {
		rl.question(
			"Now its time to set a route for the robot. Introduce some commands=> ",
			commands => {
				const commandsArr = commands.split("");
				console.log(commandsArr);
				rl.setPrompt(
					`The robot has followed all these commands ${commandsArr}`
				);
				rl.prompt();
				resolve();
			}
		);
	});
};
module.exports.runDialog = async() => {
	 await this.firstInput();
	 await this.secondInput();
	 await this.thirdInput();
	rl.close();
};


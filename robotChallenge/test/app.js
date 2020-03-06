const fs = require("fs");
const robot = require("./robot");
const grid = require("./grid");
const robotData = require("./robot.json");
const gridData = require("./grid.json");
const grid = []
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
})

const readRobotObject = () => {
	fs.readFile("./robot.json", function read(error, data) {
		if (error) {
			throw error;
		}
		const content = JSON.parse(data);
		console.log(content);
		processFile(content);
	});
};

const writeDataToGridObject = coordinates => {


};

const processFile = content => {
	console.log(content);
};

readRobotObject();

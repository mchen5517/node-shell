var commands = require('./commands.js');

process.stdin.on('data', function(data) {
	var arr = data.toString().trim().split(' ');
	var userCommand = arr[0];
	// console.log('ls', userCommand, arr[0], commands[userCommand], commands.ls)
	// console.log(data.toString().trim())

	commands[userCommand](arr.slice(1).join(' '));
});
var commands = require('./commands.js');

process.stdout.write("prompt > ");

process.stdin.on('data', function(data) {
	if (data.toString() === "\n"){
		process.stdout.write("prompt > ");
		return;
	}
	var arr = data.toString().trim().split(' ');
	var userCommand = arr[0];
	// console.log('ls', userCommand, arr[0], commands[userCommand], commands.ls)
	// console.log(data.toString().trim())
	if(commands[userCommand]){
		commands[userCommand](arr.slice(1).join(' '));
		// console.log("prompt > ")
	}
	else process.stdout.write("Invalid command!\nprompt > ");
});
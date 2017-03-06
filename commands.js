var fs = require('fs');
var request = require('request');

var done = function(output){
	process.stdout.write(output);
	process.stdout.write("prompt > ");
}

var pwd = function() {
	// console.log = process.stdout.write
	process.stdout.write(process.cwd() + '\n');
}

var ls = function() {
	fs.readdir('.', function(err, files) {
		var output = "";
		if (err) throw err;
		files.forEach(function(file) {
			output += file.toString() + "\n";
		})
		done(output);
	});
}

var date = function() {
	done(Date() + '\n');
}

var echo = function(data) {
	done(data + "\n");
}

var cat = function(data) {
	fs.readFile(data, function(err, d) { 
		if(err) return process.stdout.write(err.toString() + "\nprompt > ");
		done(d.toString() + "\n");
	});
}

var head = function(data) {
	fs.readFile(data, function(err, d) { 
		if(err) return process.stdout.write(err.toString() + "\nprompt > ");
		var lines = d.toString().split("\n").slice(0, 5).join("\n");
		done(lines + "\n");
	});
}

var tail = function(data) {
	fs.readFile(data, function(err, d) { 
		if(err) return process.stdout.write(err.toString() + "\nprompt > ");
		var lines = d.toString().split("\n").slice(-5).join("\n");
		done(lines + "\n");
	});
}

var sort = function(data) {
	fs.readFile(data, function(err, d) { 
		if(err) return process.stdout.write(err.toString() + "\nprompt > ");
		var lines = d.toString().split("\n").sort();
		done(lines.join("\n") + "\n");
	});
}

var wc = function(data) {
	fs.readFile(data, function(err, d) { 
		if(err) return process.stdout.write(err.toString() + "\nprompt > ");
		var lines = d.toString().split("\n");
		done(lines.length + "\n");
	});
}

var uniq = function(data) {
	fs.readFile(data, function(err, d) { 
		if(err) return process.stdout.write(err.toString() + "\nprompt > ");
		var lines = d.toString().split("\n");
		var newLines = [];
		for(var i = 0; i < lines.length; i++){
			newLines.push(lines[i]);
			while (lines[i] === lines[i+1]) {
				i++;
			}
		}
		done(newLines.join("\n") + "\n");
	});
}

var curl = function(data) {
	request.get(data.toString(), function(error, response, body){
		done(body);
	})
	// process.stdout.write();
}

module.exports = {
	pwd: pwd,
	ls: ls,
	date: date,
	echo: echo,
	cat: cat,
	head: head,
	tail: tail,
	sort: sort,
	wc: wc,
	uniq: uniq,
	curl: curl
}

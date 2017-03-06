var fs = require('fs');
var request = require('request');

var pwd = function() {
	// console.log = process.stdout.write
	process.stdout.write(process.cwd() + '\n');
}

var ls = function() {
	fs.readdir('.', function(err, files) {
		if (err) throw err;
		files.forEach(function(file) {
			process.stdout.write(file.toString() + "\n");
		})
	});
}

var date = function() {
	process.stdout.write((new Date()).toString() + '\n');
}

var echo = function(data) {
	process.stdout.write(data + "\n");
}

var cat = function(data) {
	fs.readFile(data, function(err, d) { // (err, d) => {
		if(err) throw err;
		console.log(d.toString());
	});
}

var head = function(data) {
	fs.readFile(data, function(err, d) { // (err, d) => {
		if(err) throw err;
		var lines = d.toString().split("\n").slice(0, 5).join("\n");
		console.log(lines);
	});
}

var tail = function(data) {
	fs.readFile(data, function(err, d) { // (err, d) => {
		if(err) throw err;
		var lines = d.toString().split("\n").slice(-5).join("\n");
		console.log(lines);
	});
}

var sort = function(data) {
	fs.readFile(data, function(err, d) { // (err, d) => {
		if(err) throw err;
		var lines = d.toString().split("\n").sort();
		console.log(lines.join("\n"));
	});
}

var wc = function(data) {
	fs.readFile(data, function(err, d) { // (err, d) => {
		if(err) throw err;
		var lines = d.toString().split("\n");
		console.log(lines.length);
	});
}

var uniq = function(data) {
	fs.readFile(data, function(err, d) { // (err, d) => {
		if(err) throw err;
		var lines = d.toString().split("\n");
		var newLines = [];
		for(var i = 0; i < lines.length; i++){
			newLines.push(lines[i]);
			while (lines[i] === lines[i+1]) {
				i++;
			}
		}
		console.log(newLines.join("\n"));
	});
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
	uniq: uniq
}

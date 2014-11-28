#!/usr/bin/env node
var sys = require("sys");
var exec = require("child_process").exec;
var puts = (function(sys) {
    return function(error, stdout, stderr) {
        sys.puts(stderr);
    };
})(sys);
var myArgs = process.argv.slice(2);
var len = myArgs.length;
var branch = "master";
var origin = "origin";
//
if(len === 0) {}
else if(len === 1) {
    branch = myArgs.shift();
} else if (len === 2){
    branch = myArgs.shift();
    origin = myArgs.shift();
} else {
    console.log("use as gitpull branch [remote], e.g. gitpull master origin");
    return;
}
exec("git pull --rebase " + origin + " " + branch, puts);

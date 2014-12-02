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
//
if(len === 1) {
    branch = myArgs.shift();
} else {
    console.log("use as gitbm abranch");
    return;
}
exec("git checkout " + branch, puts);

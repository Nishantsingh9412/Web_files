// jshint esversion:6
// over rinding file 1 over file 2
// const fs = require("fs");
// fs.copyFileSync("file1.txt","file2.txt")
var sph =  require("superheroes");
var sph_names = sph.random();
console.log('Superhero name is : '+sph_names+'\n');


var spv = require("supervillains");
var spv_names = spv.random();
console.log('SuperVillain names is : '+spv_names);
const { log } = require("console");
const fs = require("fs")
fs.writeFileSync("data1","emad")
console.log(fs.readFileSync("data1").toString());
fs.appendFileSync("data1",  " ALhajj")
console.log(fs.readFileSync("data1").toString());

const y =require("./alldata")
console.log(y);


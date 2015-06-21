var path = require("path")
var fs = require("fs")
var refineFactories = require("../index")
var file = path.join(__dirname, "1-input.txt")

var input = fs.readFileSync(file, "utf8")
console.log(refineFactories(input))

var splitNames = require('./util');
var n1 = "William Bruce Bailey";

var fName = splitNames(0, n1);
console.log(fName);

var lName = splitNames(1, n1);
console.log(lName);

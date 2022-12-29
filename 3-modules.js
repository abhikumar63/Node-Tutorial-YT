// Modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
// console.log(names);
// console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// namess is imported as object so we have to access it using .
// But sayHi is just function so we are using it directly.
// mindgrenade does not require calling because just importing it runs the function call in it.
// Modules
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade');
// console.log(names);
// console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// namess is imported as object so we have to access it using .
// But sayHi is just function so we are using it directly.
// mindgrenade does not require calling because just importing it runs the function call in it.
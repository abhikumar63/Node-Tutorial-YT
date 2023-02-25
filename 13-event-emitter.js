const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

// Many methods are in the object 
// on - listen for an event
// emit - emit an event

// Callback function describes the tadk to be done for event id occured
customEmitter.on('response',(name,id) => {
    console.log(`data received user ${name} with id: ${id}`);
})

customEmitter.on('response',() => {
    console.log(`some other logic here`);
})
// The parameter should match 
customEmitter.emit('response','john',34)

// 1. We can have as many functions for the dame event as we want and they will all be called
// 2. order matters : we cannot have emitter before the function
// 3. We can have parameters in the emitter and we can use that parameters in the callback function
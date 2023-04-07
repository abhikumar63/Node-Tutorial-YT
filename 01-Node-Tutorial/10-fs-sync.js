const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);
// to create file if not exist
// If ther is any text in the file then it will be overwritten by the text
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result:${first}, ${second}`,
    {flag: 'a'}
);
console.log('done with the task');
console.log('starting the next one');

// to append we have third argument flag 'a'
// STREAMS
// are used to read or write sequentially.. when we have to handle and manipulate streaming data
// 4 types:
// 1. Writable- used to write data sequentially
// 2. Readable- used to read data sequentially
// 3. Duplex- used to both read and write data sequentailly
// 4. Transform- to modify data when reading or writing

const {createReadStram} = require('fs');

const stream = createReadStram('./content/big.txt');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

stream.on('data',(result) => {
    console.log(result);
})

stream.on('error',(err) => { console.log(err); })
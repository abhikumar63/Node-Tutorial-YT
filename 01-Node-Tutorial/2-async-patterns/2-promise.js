const {readFile,writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
// WE CAN ALSO DO THIS BY ADDING .promises TO THE REQUIRE LINE 
// THEN WE WOULD ALSO HAVE TO CHANGE THE READFILEPROMISE TO READFILE
// AND SAMD FOR THE WRITEFILE

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt','utf8');
        const second = await readFilePromise('./content/second.txt','utf8');
        await writeFilePromise(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            {flag: 'a'})
        console.log(first,second);
    }catch(error){
        console.log(error);
    }

}

start()
// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf8',(err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }
// PROMISIFY DOES THE SAME THING FOR US BUT MORE CLEARLY 


// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err))

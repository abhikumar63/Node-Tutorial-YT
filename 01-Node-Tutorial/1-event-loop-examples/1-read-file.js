const { readFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    console.log('completed first task');
})
// readFile is asynchronous and it will offload the task so it will run in the end

console.log('starting next task')

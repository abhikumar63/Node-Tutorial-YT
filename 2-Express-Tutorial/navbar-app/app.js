// const express = require('express');
// // const app = require('express')();
// const app = express()

// app.get('/',(req,res)=>{
//     console.log(`User hit the resource.`);
//     res.status(200).send(`Home pgae`)
// })

// app.get('/about',(req,res)=>{
//     res.status(200).send(`About page`)
// })

// app.all('*',(req,res)=>{
//     res.status(404).send(`<h1>Resource Not Found.</h1>`)
// })

// app.listen(5000,()=>{
//     console.log(`server is listening on port 5000...`)
// })

// // app.get
// // app.post
// // app.put
// // app.delete
// // app.all
// // app.use
// // app.listen

const express = require('express');
const path = require('path');

const app = express()

// setup static and middleware
app.use(express.static('./public'))
// By default index is the root 

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html')); 
//     adding to static assets
//     SSR
// })

app.all('*',(req,res)=>{
    res.status(404).send('Resource Not Found.')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
})
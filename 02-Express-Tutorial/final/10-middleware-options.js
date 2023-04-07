const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party                      logger / public / morgan

// const logger = (req, res, next) => {                                    // unless the middleware terminates it will be stuck
//   const method = req.method;                                            // To overcome this you either terminates or pass it over to next function
//   const url = req.url;
//   const date = new Date().getFullYear();
//   console.log(method, url, date);
//   // res.send('Testing')
//   next()                                                               // This method calls the next function
// }

// app.use([logger, authorize])                                                          // Applies to all the get request urls
// app.use([authorize, logger])                                             // Order matters

// app.use('/api', logger)                                                   // Applies to all the urls starting with api

app.get('/', (req, res) => {
  // const method = req.method;
  // const url = req.url;
  // const date = new Date().getFullYear();
  // console.log(method, url, date);
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('About')
})

// app.get('/api/items', (req, res) => {
//   console.log(req.user);
//   res.send('About')
// })

app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('About')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
}) 
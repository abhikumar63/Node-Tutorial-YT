const logger = (req, res, next) => {                                    // unless the middleware terminates it will be stuck
    const method = req.method;                                            // To overcome this you either terminates or pass it over to next function
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method, url, date);
    // res.send('Testing')
    next()                                                               // This method calls the next function
}

  module.exports = logger
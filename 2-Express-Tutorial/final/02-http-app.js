const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res) => {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url
    // Home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})  //Content type matters, if we write plain then plaintext will be displayed ,Express takes care of that
        // Status code also matters to check the working of the site
        res.write(homePage)
        res.end()
    }
    // Aboout page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // styles
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // image/logo
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    // logic
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    // 404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>404 Page Not Found</h1>')
        res.end()
    }
    
})

server.listen(5000)
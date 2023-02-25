const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    res.write('Welcome to our home page')
    res.end();
})

server.listen(5000);


// npm - global command, comes with node
// npm --version

// local dependancy - use it only in this particular project
// npm i <packageName>

// global dependancy - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties ets)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// We add node_modules to gitignore because it may become very large
// instead when someone clones the project they just have to rum npm install command and all the modules will be installed because the package.json have all the modules in the dependecy.

// npm install <packageName> -D or --save-dev
// we add nodemon as dev dependency because when we deploy our project we dont need nodemon there. we only need it during develpoment
// more dev dependencoes: testing packages, linting packages, formatting packages
// we can add them as normal dependencies but there is no requirement
// nodemon is installed locally and we can use only by npm start after I change the script

// By changing the script we can simply write npm start and it will start node app.js
// we can replace it by nodemon app.js OR we can add another "dev": "nodemon app.js" which will run when we write npm run dev

// Uninstall package
// uninstall <packageName>

// Nuclear Approach
// Delete node modules folder and package-lock.json files, then remove the dependencies from the package.json file you want to delete.
// Then run npm install  
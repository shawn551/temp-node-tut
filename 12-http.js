const http = require('http');

const server = http.createServer((req, res) => {
/*
    console.log(req);
    res.write('Home Page');
    res.end();
*/
    if(req.url === '/'){
        res.end('This is the home page')
    }
    if(req.url === '/about'){
        res.end('This is the about page')
    }   
    res.end(`<h1>This is error</h1>`)
})

server.listen(5000)
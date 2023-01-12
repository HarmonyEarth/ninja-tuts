const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type

    res.setHeader('Content-Type', 'text/html');

    // res.write('<title>Hikari Sentai Maskman</title>');
    // res.write('<h1>Greetings, Maskman</h1>');
    // res.end();

    let path = './Denziman/';
    switch(req.url){
        case '/':
            path += 'tiger.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        // case '/create':
        //     path += 'create.html';
        //     res.statusCode = 200;
        //     break;
        
        case '/about-denzi':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data); // only pass data into end method if sending only one file
        }
    });

});

const portNumber = 3001;

server.listen(portNumber, 'localhost', () => {
    console.log('Listening for requests on port', portNumber);
});
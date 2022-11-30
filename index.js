const http = require('http');

const server = http
  .createServer(function (request, response) {
    const url = request.url.toLowerCase();

    if (url === '/' || url === '/home') {
      response.write('<h1>Home</h1>');
   
    } else {
      response.write('<h1>404</h1>');
    }

    if (url === '/' || url === '/carro') {
      response.write('<h1>Carro</h1>');
   
    } else {
      response.write('<h1>200</h1>');
    }

    response.end();
  })
  .listen(3000, function () {
    console.log('Servidor funcionando em http://localhost:3000');
  });
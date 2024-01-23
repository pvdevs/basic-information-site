const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');

  res.write('<h1>hello, cutties</h1>');
  res.write('<p>we doin it!</p>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});

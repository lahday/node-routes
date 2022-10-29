
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

 const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname=== '/home.html') {
    //homepage
fs.readFile ('home.html', (err,data) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
});
// about page
  } else if (pathname === '/about.html'){
    fs.readFile ('about.html', (err,data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
    // contact page
  }  else if ( pathname === '/contact.html'){
    fs.readFile ('contact.html', (err,data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
     return res.end("404 Not Found");
  }
});

server.listen (8080, '127.0.0.1', () => {
  console.log ('listen to server request from port 8080')
});
//   let filename = "home.html" + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
//backend/server.js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Received request for: ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Backend Response\n');
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

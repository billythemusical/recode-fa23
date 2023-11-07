const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const port = 3000;

const server = http.createServer((request, response) => {
    const reqURL = request.url === '/' ? 'index.html' : request.url
    const filePath = path.join(publicDir, reqUrl);

    fs.createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

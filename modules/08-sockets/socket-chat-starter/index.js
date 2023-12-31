const express = require('express');
const { createServer } = require('node:http')

const app = express();
const server = createServer(app);

app.use(express.static('public'))

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

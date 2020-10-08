const express = require('express')
const server = express();
const path = require('path');
const port = 3000;

//server.use(express.static(path.join(__dirname, '/public')));
server.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '../public/index.html'));

}).listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

const http = require('http');

const app = require('./app');

//Define port
const port = process.env.PORT || 3000;

//Create server
const server = http.createServer(app);

//Listen port
server.listen(port, () => {
    console.log('Server is running on port ' + port);
});



const {PORT} = require('./config.js');
const server = require('./server.js');
server.runServer(process.env.DATABASE_URL, PORT);

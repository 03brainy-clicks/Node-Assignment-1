const http = require("http");

const routes = require("./routes");

// creating server
const server = http.createServer(routes);

// running server
server.listen(3000);

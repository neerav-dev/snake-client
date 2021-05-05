const net = require("net");
const {IP, PORT} = require('../snake-client/constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    conn.write(`Name: NP`);
  });

  conn.on("data", (msg) => {
    // code that does something when the connection is first established
    console.log('Server says:', msg);
  });

  conn.on("close", () => {
    process.exit();
  });

  console.log("Connecting ...");

  return conn;
};



// console.log("Connecting ...");
// connect();

module.exports = { connect };
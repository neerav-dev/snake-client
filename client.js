const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    conn.write(`Name: NP`);

    conn.write('Move: up');
  });

  conn.on("data", (msg) => {
    // code that does something when the connection is first established
    console.log('Server says:', msg);
  });

  return conn;
};



// console.log("Connecting ...");
// connect();

module.exports = { connect };
const { MOVES, MESSAGES } = require('../snake-client/constants');
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }

  Object.keys(MESSAGES).filter(currentKey => currentKey === key).length > 0 && connection.write(MESSAGES[key]);
  Object.keys(MOVES).filter(currentKey => currentKey === key).length > 0 && connection.write(MOVES[key]);

};

module.exports = { setupInput };
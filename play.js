const { connect } = require('../snake-client/client');
const {setupInput} = require('../snake-client/input');
const net = require("net");





console.log("Connecting ...");

const conn = connect();
setupInput(conn);

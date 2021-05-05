const { connect } = require('../snake-client/client');
const {setupInput} = require('../snake-client/input');


const conn = connect();
setupInput(conn);

const { connect } = require('./client');
const { setupInput } = require('./input')

console.log("Connecting ...");

// Call setupInput function with a connect function call to populate the conn object into the input.js file.
setupInput(connect());

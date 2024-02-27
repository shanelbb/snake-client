const { messages } = require('./constants')

// empty variable to hold conn object returned in the connect function from client.js so we can use it to send data to the server.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Function to instruct the program what actions to take when certain keys are pressed
const handleUserInput = (key) => {
  // Set Ctrl+ C to exit out of program
  if (key === "\u0003") {
    process.exit();
  }

  // Directional key commands
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  }

  // Call sendMsg function
  sendMsg(messages, key);
};

// Function to write messages to other players within the game. Takes in an obj and a key as arguments
const sendMsg = (msgObj, key) => {
  // Assign variable prop to equal key that is pressed
  let prop = key
  // check if the prop variable exists as a property in the msgObj that is passed
  if (prop in msgObj) {
    // if true send the corresponding message to the server to write it to the game space
    connection.write(`Say: ${msgObj[prop]}`)
  }
}

module.exports = { setupInput };

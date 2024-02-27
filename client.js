const net = require("net");
const { IP, PORT } = require('./constants')
// array to hold the initials given as an argument upon connecting to server
const initials = process.argv.slice(2)

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // net connection event to receive data from the server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // net connection event to send messages to server
  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
    // Add initials variable to the game space.
    if (!initials.length) {
      // if no initials are given, default user name to FRN
      conn.write(`Name: FRN`);
    } else {
      conn.write(`Name: ${initials[0]}`);
    }
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // return connection object for use in other files
  return conn;
};


module.exports = { connect };

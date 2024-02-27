const net = require("net");
const { IP, PORT } = require('./constants')

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
    conn.write('Name: STM');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // return connection object for use in other files
  return conn;
};


module.exports = { connect };

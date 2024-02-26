const net = require("net");
const { setTimeout } = require("timers/promises");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
    conn.write('Name: STM');
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 500);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = { connect };

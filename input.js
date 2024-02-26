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

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  }

  sendMsg(messages, key);
};

const messages = {
  g: 'I kik u butt',
  h: 'My snek will kill u snek',
  j: 'Ha! U ded.',
  k: 'U loser!',
  l: 'Y u so bad at snek?',
}

const sendMsg = (msgObj, key) => {
  let prop = key
  if (prop in msgObj) {
    connection.write(`Say: ${msgObj[prop]}`)
  }
}

// const sendMsg = (key) => {
//   if (key === 'h') {
//     connection.write('Hi friend!')
//   } else if (key === 'g') {
//     connection.write('Get ready to lose!')
//   }
// }



module.exports = {setupInput};

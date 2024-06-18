process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name.trim()}\n`);
    process.exit();
  }
});

process.on('exit', () => {
  // if echo "john" | node 1-stdin.js
  if (process.stdin.isTTY === false) {
    process.stdout.write('This important software is now closing\n');
  }
});

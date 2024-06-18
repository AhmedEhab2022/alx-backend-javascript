const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(data.join('\n'));
        res.end();
      })
      .catch((error) => {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write(error.message);
        res.end();
      });
  }
});

module.exports = app;

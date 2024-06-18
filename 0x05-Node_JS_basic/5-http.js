const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.write(`Number of students: ${data[0]}\n`);
        res.write(`Number of students in CS: ${data[1].length}. List: ${data[1].join(', ')}\n`);
        res.write(`Number of students in SWE: ${data[2].length}. List: ${data[2].join(', ')}\n`);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
});

app.listen(1245);

module.exports = app;

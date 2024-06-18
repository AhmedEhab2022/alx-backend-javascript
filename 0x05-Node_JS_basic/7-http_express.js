const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data[0]}\n`);
      res.write(`Number of students in CS: ${data[1].length}. List: ${data[1].join(', ')}\n`);
      res.write(`Number of students in SWE: ${data[2].length}. List: ${data[2].join(', ')}`);
      res.end();
    })
    .catch((error) => {
      res.write(error.message);
      res.end();
    });
});

app.listen(1245);

module.exports = app;

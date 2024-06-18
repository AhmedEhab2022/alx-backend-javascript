const fs = require('fs');

function readDatabase(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = data.split('\r\n').slice(1);
      for (let i = students.length - 1; i >= 0; i -= 1) {
        if (students[i] === '') {
          students.splice(i, 1);
        }
      }
      const listOfCsFirstnames = [];
      const listOfSweFirstnames = [];
      students.forEach((student) => {
        const studentArray = student.split(',');
        if (studentArray[3] === 'CS') {
          listOfCsFirstnames.push(studentArray[0]);
        } else if (studentArray[3] === 'SWE') {
          listOfSweFirstnames.push(studentArray[0]);
        }
      });
      const arraysObject = {
        listOfCsFirstnames,
        listOfSweFirstnames,
      };
      resolve(arraysObject);
    });
  });
}

export default readDatabase;

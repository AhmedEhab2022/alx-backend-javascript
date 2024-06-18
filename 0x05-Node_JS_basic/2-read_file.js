const fs = require('fs');

function countStudents(databasePath) {
  if (fs.existsSync(databasePath)) {
    const data = fs.readFileSync(databasePath, 'utf8');
    let numOfCsStudents = 0;
    let numOfSweStudents = 0;
    const listOfCsFirstnames = [];
    const listOfSweFirstnames = [];
    const students = data.split('\r\n').slice(1);
    students.splice(students.indexOf(''));
    console.log(`Number of students: ${students.length}`);
    students.forEach((student) => {
      const studentArray = student.split(',');
      if (studentArray[3] === 'CS') {
        listOfCsFirstnames.push(studentArray[0]);
        numOfCsStudents += 1;
      } else {
        listOfSweFirstnames.push(studentArray[0]);
        numOfSweStudents += 1;
      }
    });
    let listStr1 = ` List: ${listOfCsFirstnames.join(', ')}`;
    let listStr2 = ` List: ${listOfSweFirstnames.join(', ')}`;
    if (listOfCsFirstnames.length === 0) {
      listStr1 = '';
    }
    if (listOfSweFirstnames.length === 0) {
      listStr2 = '';
    }
    console.log(`Number of students in CS: ${numOfCsStudents}.${listStr1}`);
    console.log(`Number of students in SWE: ${numOfSweStudents}.${listStr2}`);
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

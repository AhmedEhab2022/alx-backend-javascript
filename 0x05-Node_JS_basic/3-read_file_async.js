const fs = require('fs');

async function countStudents(databasePath) {
  try {
    const data = await fs.promises.readFile(databasePath, 'utf8');
    let numOfCsStudents = 0;
    let numOfSweStudents = 0;
    const listOfCsFirstnames = [];
    const listOfSweFirstnames = [];
    const students = data.split('\r\n').slice(1);
    for (let i = students.length - 1; i >= 0; i -= 1) {
      if (students[i] === '') {
        students.splice(i, 1);
      }
    }
    console.log(`Number of students: ${students.length}`);
    students.forEach((student) => {
      const studentArray = student.split(',');
      if (studentArray[3] === 'CS') {
        listOfCsFirstnames.push(studentArray[0]);
        numOfCsStudents += 1;
      } else if (studentArray[3] === 'SWE') {
        listOfSweFirstnames.push(studentArray[0]);
        numOfSweStudents += 1;
      }
    });
    console.log(`Number of students in CS: ${numOfCsStudents}. List: ${listOfCsFirstnames.join(', ')}`);
    console.log(`Number of students in SWE: ${numOfSweStudents}. List: ${listOfSweFirstnames.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

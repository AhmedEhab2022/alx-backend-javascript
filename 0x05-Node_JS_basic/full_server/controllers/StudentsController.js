import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    res.write('This is the list of our students\n');
    readDatabase(process.argv[2])
      .then((data) => {
        res.write(`Number of students in CS: ${data.listOfCsFirstnames.length}. List: ${data.listOfCsFirstnames.join(', ')}`);
        res.write(`Number of students in SWE: ${data.listOfSweFirstnames.length}. List: ${data.listOfSweFirstnames.join(', ')}`);
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.write(error.message);
        res.end();
      });
  }

  static async getAllStudentsByMajor(req, res) {
    if (req.params.major === 'CS' || req.params.major === 'SWE') {
      readDatabase(process.argv[2])
        .then((data) => {
          if (req.params.major === 'CS') {
            res.write(`List: ${data.listOfCsFirstnames.join(', ')}`);
          } else {
            res.write(`List: ${data.listOfSweFirstnames.join(', ')}`);
          }
          res.end();
        })
        .catch((error) => {
          res.statusCode = 500;
          res.write(error.message);
          res.end();
        });
    } else {
      res.statusCode = 404;
      res.write('Major parameter must be CS or SWE');
      res.end();
    }
  }
}

export default StudentsController;

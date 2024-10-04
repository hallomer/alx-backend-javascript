const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((students) => {
        let output = 'This is the list of our students\n';
        for (const field of Object.keys(students).sort()) {
          output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        }
        response.status(200).send(output.trim());
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((students) => {
        const list = students[major] || [];
        response.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;

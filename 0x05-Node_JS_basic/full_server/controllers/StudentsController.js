#!/usr/bin/node
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase('database.csv');
      const response = ['This is the list of our students'];

      for (const [field, students] of Object.entries(fields)) {
        response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      res.send(response.join('\n'));
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase('database.csv');
      const students = fields[major] || [];
      res.send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = StudentsController;

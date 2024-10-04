#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n');
    const fields = {};

    lines.shift();

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (fields[field]) {
        fields[field].push(firstname);
      } else {
        fields[field] = [firstname];
      }
    });

    console.log(`Number of students: ${lines.length}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
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
        resolve();
      }
    });
  });
}

module.exports = countStudents;

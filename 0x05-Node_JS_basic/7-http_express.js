const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

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

        const summary = [`Number of students: ${lines.length}`];
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            summary.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }
        resolve(summary.join('\n'));
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  countStudents(databasePath)
    .then((summary) => {
      res.send(`This is the list of our students\n${summary}`);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;

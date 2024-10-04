#!/usr/bin/node
const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

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

      const numberOfStudents = lines.length;
      let response = `Number of students: ${numberOfStudents}\n`;

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }

      resolve(response.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((response) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${response}`);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
      });
  }
});

app.listen(1245);

module.exports = app;

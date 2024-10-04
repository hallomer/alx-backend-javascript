#!/usr/bin/node
const fs = require('fs');

async function readDatabase(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const fields = {};

    lines.shift();

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;

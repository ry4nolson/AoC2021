const fs = require('fs');
const path = require('path');

//load 1.txt
const filePath = path.join(__dirname, '1.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');

let larger = 0;

//split fileContent into array of lines
const lines = fileContent.split('\n');
//parse each line into array of numbers
const numbers = lines.map(line => parseInt(line, 10));

//loop through each line, stargin with the second line
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    larger++;
  }
}

console.log(larger);


const fs = require('fs');
const path = require('path');

//load 1.txt
const filePath = path.join(__dirname, '2.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');

let horizontal = 0;
let depth = 0;
let aim = 0;

//split fileContent into array of lines
const lines = fileContent.split('\n');
//parse each line into array of numbers
const movements = lines.map(line => {
  const parts = line.split(' ');
  return {
    direction: parts[0],
    distance: parseInt(parts[1])
  }
});

//loop through each line, stargin with the second line
for (let i = 0; i < movements.length; i++) {
  const movement = movements[i];
  if (movement.direction === 'forward') {
    horizontal += movement.distance;
    depth += movement.distance * aim;
  } else if (movement.direction === 'down') {
    aim += movement.distance;
  } else if (movement.direction === 'up') {
    aim -= movement.distance;
  }
}

console.log(horizontal * depth);


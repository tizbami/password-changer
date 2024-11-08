const fs = require('fs');

// const data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log('Program Ended');

// asynhronous operation
fs.readFile('input.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  } 
    console.log(data.toString());
});

console.log('Program Ended');
console.log('Bami is learning Node.js');
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

try {
  console.log(first);
  console.log(second);
} catch (err) {
  console.error('Error reading files:', err);
}

writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`)
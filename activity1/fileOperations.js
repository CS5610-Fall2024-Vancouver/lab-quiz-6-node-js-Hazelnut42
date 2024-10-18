const fs = require('fs');

function writeFilePromise(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

writeFilePromise('userData.txt', 'Hello, this is a test message!')
  .then(() => {
    console.log('Success!');
    return readFilePromise('userData.txt');
  })
  .then((data) => {
    console.log(`Data: ${data}`);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.5;
      if (shouldFail) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve();
      }
    }, 100);
  });
}

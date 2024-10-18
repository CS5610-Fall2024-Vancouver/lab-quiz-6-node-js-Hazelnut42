const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
  res.render('users', { users });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
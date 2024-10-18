const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = users.length;
  users = users.filter(user => user.id !== id);
  
  if (users.length < initialLength) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
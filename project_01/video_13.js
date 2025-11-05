const fs = require('fs');
const express = require('express');

// const fs = require('fs');
// const data = fs.readFileSync('./MOCK_DATA.json', 'utf8');
// const users = JSON.parse(data);

const app = express();
const port = 8000;

const users = require('./MOCK_DATA.json')
app.get('/' , (req , res) => {
    res.json(users);
})

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  if (!newUser.first_name || !newUser.last_name || !newUser.email)
    return res.status(400).json({ message: "Please provide first_name, last_name, and email" });
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(newUser);
  fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 2));
  res.status(201).json(newUser);
});

app.patch('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users[index] = { ...users[index], ...req.body };
  fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 2));
  res.json(users[index]);
});

app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  const deleted = users.splice(index, 1);
  fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 2));
  res.json({ message: "User deleted", deleted });
});

app.get('/', (req, res) => {
  res.send('Welcome to Roshan’s User API 🚀');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
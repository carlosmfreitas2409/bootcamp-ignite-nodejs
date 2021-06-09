const express = require('express');
const cors = require('cors');
const { v4: uuid } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find(user => user.username === username);

  if(!user) {
    return response.status(400).json({
      error: 'User not found'
    });
  }

  request.user = user;

  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const checkUserExists = users.some(user => user.username === username);

  if(checkUserExists) {
    return response.status(400).json({
      error: 'User already exists!'
    });
  }

  const user = {
    id: uuid(),
    name,
    username,
    todos: []
  }

  users.push(user);

  return response.status(201).json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  const user = request.user;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const user = request.user;

  const todoOperation = {
    id: uuid(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date()
  };

  user.todos.push(todoOperation);

  return response.status(201).json(todoOperation);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id: todoID } = request.params;
  const { title, deadline } = request.body;
  const user = request.user;

  const todo = user.todos.find(todo => todo.id === todoID);
  if(!todo) {
    return response.status(404).json({
      error: 'Todo not exists'
    });
  }

  todo.title = title;
  todo.deadline = new Date(deadline);

  return response.status(201).json(todo);
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const { id: todoID } = request.params;
  const user = request.user;

  const todo = user.todos.find(todo => todo.id === todoID);
  if(!todo) {
    return response.status(404).json({
      error: 'Todo not exists'
    });
  }

  todo.done = true;

  return response.status(201).json(todo);
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const { id: todoID } = request.params;
  const user = request.user;

  const todo = user.todos.find(todo => todo.id === todoID);
  if(!todo) {
    return response.status(404).json({
      error: 'Todo not found'
    })
  }

  user.todos.splice(todo, 1);

  return response.status(204).send();
});

module.exports = app;
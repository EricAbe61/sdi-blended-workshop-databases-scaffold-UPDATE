const express = require('express');
const knex = require('./knex'); 
const app = express();

app.use(express.json()); 

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Its on like Donkey-Kong....FOOLLLLLL!');
});

app.post('/users', async (req, res) => {
  const { name, password } = req.body;
  try {
    const newUser = await knex('users').insert({ name, password }).returning('*');
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  const { name } = req.query;
  try {
    const query = knex('users').select('*');
    if (name) {
      query.where('name', 'like', `%${name}%`);
    }
    const users = await query;
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  try {
    const updatedUser = await knex('users').where({ id }).update({ name, password }).returning('*');
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await knex('users').where({ id }).del();
    res.status(204).send(); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  const { name } = req.query;
  try {
    const query = knex('users').select('*');
    if (name) {
      query.where('name', 'like', `%${name}%`);
    }
    const users = await query;
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

app.post('/stocks', async (req, res) => {
    const { name, price, oversold, float_value } = req.body;
    try {
      const newStock = await knex('stock_table').insert({ name, price, oversold, float_value }).returning('*');
      res.status(201).json(newStock);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.get('/stocks', async (req, res) => {
    try {
      const stocks = await knex('stock_table').select('*');
      res.json(stocks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.post('/search', async (req, res) => {
    const { query } = req.body;
    try {
      const newSearch = await knex('search_table').insert({ query }).returning('*');
      res.status(201).json(newSearch);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.get('/search', async (req, res) => {
    try {
      const searchResults = await knex('search_table').select('*');
      res.json(searchResults);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

  
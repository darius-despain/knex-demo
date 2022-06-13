const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;;

const knex = require('knex')(require('../knexfile.js')[process.env.NOVE_ENV||'development']);

app.get('/', (req, res) => {
  res.send('Application up and running.')
})

app.listen(PORT, () => {
  console.log('Your Knex and Express application are running successfully')
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(data => {
      var petNames = data.map(pet => pet.name)
      res.json(petNames);
    })
})
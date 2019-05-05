const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');
const knex = require('knex');

const userRoute = require('./routes/users');

const express = require('express');
const app = express();

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: '',
    password: '',
    database: ''
  }
});

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/users/', userRoute);

app.get('/', (req, res) => {
  console.log(`Did a request`);
  res.status(200).send(`Everything is good`);
});

const port = process.env.PORT || 3000;
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`We are listenin port ${port}`);
    });
  } catch (error) {
    console.log(`We got an error`, error);
  }
};

module.exports = { start, db };

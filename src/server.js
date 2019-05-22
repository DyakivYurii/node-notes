const cors = require('cors');
const morgan = require('morgan');

const userRoute = require('./routes/users/users');
const tasksRoute = require('./routes/tasks');
const authRoute = require('./routes/auth/auth');
const loginRoute = require('./routes/authUser');

const express = require('express');
const app = express();

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/users/', userRoute);
app.use('/api/tasks/', tasksRoute);
// app.use('/api/auth/', authRoute);
app.use('/api/login/', loginRoute);

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

module.exports = { start };

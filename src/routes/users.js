const { db } = require('../server');
const express = require('express');
const router = express.Router();

// /api/users/
router
  .route('/')
  .post((req, res) => {
    console.log(`we got post request`);
    res.status(200).send(`We got an request to create a user`);
  })
  .get((req, res) => {
    const result = () => {
      db.select()
        .from('users')
        .then((items) => {
          if (items.length) {
            console.log(`without using json`, items);
            res.status(200).json(items);
          } else {
            res.json({ dataExists: 'false' });
          }
        })
        .catch((error) => {
          console.log(`Error with db`);
          res.status(400).json({ dbError: 'db error' });
        });
    };
    result();
  });

module.exports = router;

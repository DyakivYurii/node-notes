const createUser = (req, res, db) => {
  db.returning('*')
    .insert({ name: req.body.name, email: req.body.email })
    .into('users')
    .then((items) => {
      if (items.length) {
        res.status(200).json(items);
      } else {
        res.status(200).json({ dataExists: 'false' });
      }
    })
    .catch((error) => {
      res.status(400).json({ errorMessage: error.detail });
    });
};

const getUsers = (req, res, db) => {
  db.select('*')
    .from('users')
    .then((items) => {
      if (items.length) {
        res.status(200).json(items);
      } else {
        res.json({ dataExists: 'false' });
      }
    })
    .catch((error) => {
      res.status(400).json({ dbError: 'db error' });
    });
};

module.exports = {
  getUsers,
  createUser
};

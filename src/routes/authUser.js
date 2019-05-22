const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res, next) => {
  const token = jwt.sign(
    {
      email: 'someemail@gmail.com',
      userId: 2
    },
    'secret',
    {
      expiresIn: '1h'
    }
  );
  res.json({ token });
});

module.exports = router;

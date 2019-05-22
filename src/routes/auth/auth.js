const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const db = require('../../db');

const validateUser = (validateElement) => {
  const schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  });
  const resultOfValidation = Joi.validate(validateElement, schema);
  return resultOfValidation;
};

router.post('/', (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const currentUserInDB = async () => {
    await db
      .select('*')
      .from('users')
      .where('email', req.body.email)
      .then((items) => {
        if (items.length) {
          return items;
        }
        return null;
      })
      .catch((error) => {
        res.status(400).json({ dbError: 'db error' });
      });
  };

  console.log(`Current user`, currentUserInDB());
  // const

  // res.send(req.body);
  // console.log(req.body);
  // console.log(`we got auth user`);
});

module.exports = router;

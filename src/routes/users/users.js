const db = require('../../db');
const express = require('express');
const router = express.Router();

const userController = require('./controllers');

// /api/users/
router
  .route('/')
  .post((req, res) => {
    userController.createUser(req, res, db);
  })
  .get((req, res) => {
    userController.getUsers(req, res, db);
  });

module.exports = router;

const express = require('express');
const router = express.Router();
const ckeckAuth = require('../middelware/check-auth');

// /api/tasks/
router
  .route('/')
  .post()
  .get(ckeckAuth, (req, res) => {
    res.json({ tasks: [] });
  })
  .put()
  .delete();

// /api/tasts/:id
router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;

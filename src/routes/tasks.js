const express = require('express');
const router = express.Router();

// /api/tasks/
router
  .route('/')
  .post()
  .get()
  .put()
  .delete();

// /api/tasts/:id
router
  .route('/:id')
  .get()
  .put()
  .delete();

// Write your "actions" router here!
const express = require('express');
const middleware = require('../middleware/middleware');

const router = express.Router();

const db = require('./actions-model');

router.get('/', (req, res) => {
  db.get()
  .then((resp) => {
    res.send(resp);
  })
});


module.exports = router;
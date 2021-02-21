// Write your "projects" router here!
const express = require('express');

const router = express.Router();

const db = require('./projects-model');

router.get('/', (req, res) => {
  db.get()
  .then((resp) => {
    res.send(resp);
  })
});


module.exports = router;
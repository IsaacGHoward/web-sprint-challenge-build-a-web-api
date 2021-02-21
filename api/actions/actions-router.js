// Write your "actions" router here!
const express = require('express');

const router = express.Router();

const db = require('./actions-model');

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  res.send({Message: "Hello!"});
});


module.exports = router;
// Write your "projects" router here!
const express = require('express');

const router = express.Router();

const db = require('./projects-model');

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  res.send({Message: "Hello!"});
});


module.exports = router;
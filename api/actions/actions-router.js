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

router.get('/:id', middleware.validateActionId, (req, res) => {
  res.send(req.action);
});

router.post('/', middleware.validateAction, middleware.validateLinkedProjectId, (req, res) => {
  db.insert(req.body)
  .then((resp)=> {
    res.send(resp);
  })
  .catch((err) => {
    res.send(err);
  })
});

router.put('/:id', middleware.validateActionId ,middleware.validateLinkedProjectId ,(req,res) => {
  db.update(req.params.id, req.body)
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => {
    res.send(err);
  })
});

router.delete('/:id', middleware.validateActionId, (req,res) => {
  db.remove(req.params.id)
  .then(() => {
    res.send({});
  })
});
module.exports = router;
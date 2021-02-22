// Write your "projects" router here!
const express = require('express');
const middleware = require('../middleware/middleware');

const router = express.Router();

const db = require('./projects-model');

router.get('/', (req, res) => {
  db.get()
  .then((resp) => {
    res.send(resp);
  })
});

router.get('/:id', middleware.validateProjectId, (req, res) => {
  res.send(req.project);
});

router.post('/', middleware.validateProject, (req, res) => {
  db.insert(req.body)
  .then((resp)=> {
    res.send(resp);
  })
  .catch((err) => {
    res.send(err);
  })
});

router.put('/:id', middleware.validateProjectId ,(req,res) => {
  db.update(req.params.id, req.body)
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => {
    res.send(err);
  })
});

router.delete('/:id', middleware.validateProjectId, (req,res) => {
  db.remove(req.params.id)
  .then(() => {
    res.send({});
  })
});

router.get('/:id/actions', middleware.validateProjectId, (req,res) => {
  db.getProjectActions(req.params.id)
  .then((resp) => {
    res.send(resp);
  })
})

module.exports = router;
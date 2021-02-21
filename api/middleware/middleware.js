const actiondb = require('../actions/actions-model');
const projectdb = require('../projects/projects-model');


function validateActionId(req, res, next) {
  actiondb.get(req.params.id)
  .then((response) => {
    if(response){
      req.action = response;
      next();
    }
    else
      res.status(404).send({ message: "action not found at ID" });
  })
}

function validateProjectId(req, res, next) {
  projectdb.get(req.params.id)
  .then((response) => {
    if(response){
      req.project = response;
      next();
    }
    else
      res.status(404).send({ message: "project not found at ID" });
  })
}

function validateProject(req, res, next) {
  if(Object.keys(req.body).length === 0)
    res.status(400).send({ message: "missing project data" });
  else if(!req.body.name || !req.body.description)
    res.status(400).send({ message: "missing required name or description field" });
  else
    next();
}

function validateAction(req, res, next) {
  if(Object.keys(req.body).length === 0)
    res.status(400).send({ message: "missing action data" });
  else if(!req.body.project_id || !req.body.description || !req.body.notes)
    res.status(400).send({ message: "missing required field(s)" });
  else{
    //validateProjectId(res,res,next);
    next();
  }
}

function validateLinkedProjectId(req,res,next){
  if(req.body.project_id){
    projectdb.get(req.body.project_id)
    .then((response) => {
      if(response){
        next();
      }
      else
        res.status(404).send({ message: "provided project ID is invalid" });
    })
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  validateActionId: validateActionId,
  validateProjectId: validateProjectId,
  validateProject: validateProject,
  validateAction: validateAction,
  validateLinkedProjectId: validateLinkedProjectId
};
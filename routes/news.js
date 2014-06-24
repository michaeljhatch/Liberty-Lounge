var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  models.Project
    .find(projectID)
    .sort('-date')
    .exec(afterQuery)

  function afterQuery(err, news) {
    if(err) console.log(err);
    res.json(news[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  var newPost = new models.Project({
    "title": form_data['project_title'],
    "date": form_data['date'],
    "summary": form_data['summary'],
    "image": form_data['image_url']
  });

  newPost.save(afterSaving);

  function afterSaving(err) 
  { 
    if(err) {
      console.log(err); 
      res.send(500); 
    }

    res.redirect('/');
  }

}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  models.Project
    .find({"_id": projectID})
    .remove()
    .exec(afterRemoving)

    function afterRemoving()
    {
      res.send(200);
    }
}
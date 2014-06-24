
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

	models.Project
		.find()
		.sort('date')
		.exec(renderProjects);

	function renderProjects(err, news) {
		res.render('index', { 'news': news });
	}

};
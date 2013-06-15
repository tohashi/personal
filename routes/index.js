var model = require('../model'),
    Post = model.Post;

exports.webapps = require('./webapps');

exports.index = function(req, res) {
  Post.find({}, function(err, items) {
    res.render('index', {title: 't93 workplace', items: items});
  });
};

exports.form = function(req, res) {
  res.render('form', {title: 'New Entry'});
};

exports.create = function(req, res) {
  var newPost = new Post(req.body);
  newPost.save(function(err) {
    if (err) {
      console.log(err);
      res.redirect('back');
    }else {
      res.redirect('/');
    }
  });
};


var model = require('../model');
var Post = model.Post;

exports.index = function(req, res) {
  Post.find({}, function(err, items) {
    res.render('index', {title: 't9m workplace', items: items});
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

exports.enchant = function(req, res) {
  res.render('enchant', {title: 'enchant.js', js: '/javascripts/game.js'});
}

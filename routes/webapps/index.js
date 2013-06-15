exports.scraping = require('./scraping');

exports.index = function(req, res) {
  res.render('./webapps/index', {title: 'Web Applications'});
};


exports.index = function(req, res) {
  res.render('./webapps/scraping/index', {
      title: 'Scraping Test',
      currentPath: '/webapps/scraping'
  });
};

exports.page = function(num, req, res) {
  res.render('./webapps/scraping/page', {
      title: 'page' + num,
      currentPath: req.url 
  });
};


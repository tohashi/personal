exports.index = function(req, res) {
  res.render('./webapps/scraping/index', {
      title: 'Scraping Test',
      currentPath: '/webapps/scraping'
  });
};


/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    _ = require('lodash'),
    lessMiddleware = require('less-middleware'),
    app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(lessMiddleware({
        src:  __dirname + '/public/less',
        dest: __dirname + '/public/css',
        prefix: '/css'
    }));
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

// Routing
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/form', routes.form);
app.post('/create', routes.create);

// Applications
app.get('/webapps', routes.webapps.index);

// Scraping Test
app.get('/webapps/scraping', routes.webapps.scraping.index);
_.times(5, function(num) {
    num++;
    app.get('/webapps/scraping/page' + num, function(req, res) {
        routes.webapps.scraping.page(num, req, res);
    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

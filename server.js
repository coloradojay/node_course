var express = require('express');
var app = express();
var PORT = 3000;

// Express middleware requires 3 parameters to be passed
var middleware = {
  requireAuthentication: function(req, res, next){
    console.log('Private route hit!');
    next();
  },
  logger: function(req, res, next){
      var time = new Date().toString();
      console.log('Request: ' + time + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

// Application level middleware
// app.use(middleware.requireAuthentication);
// Showing the html method used
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
    console.log('express server started on port: ' + PORT + "!");
});
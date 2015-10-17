var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware');

// Application level middleware
// app.use(middleware.requireAuthentication);
// Showing the html method used
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('express server started on port: ' + PORT + "!");
});
var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views', 'index.html'));
});

app.listen(port);

console.log('App up and running on ' + port + ' in ' + process.env.NODE_ENV);

exports = module.exports = app;

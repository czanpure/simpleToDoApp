var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride  = require('method-override');


//configuration
var __dirname = '/Users/czanpure/simpleToDoApp';

mongoose.connect('mongodb://localhost/todoappdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride());

require('./app/routes.js')(app);

app.get('*', function(req, res){
    res.sendfile('./public/index.html');
});

app.listen(8082);
console.log('App Listening on port 8082');


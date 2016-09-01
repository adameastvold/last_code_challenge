var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');


var createHero = require('./routes/createHero');
var deleteHero = require('./routes/deleteHero');
var retrieveHero = require('./routes/retrieveHero');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());


//============ROUTES=============
app.use('/createHero', createHero);
app.use('/deleteHero', deleteHero);
app.use('/retrieveHero', retrieveHero);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
});

//===========MONGOOSE=============

var databaseUri = 'mongodb://localhost:27017/heros';  //27017 is the default

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function() {
  console.log('Mongoose is good to go!', databaseUri);
});

mongoose.connection.on('error', function(err){
  console.log('Mongoose is not connected due to:', err);
});




app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});

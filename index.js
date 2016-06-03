var express = require('express');
var app = express();

app.use(express.static( __dirname + '/client/public' ));

app.get('/', function( req, res, next ) {
  res.sendFile( __dirname + '/client/public/views/index.html' );
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('up at ' + port);
});

var express = require('express');
var fs =require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var content =  fs.readFileSync('index.html').toString();
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

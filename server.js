var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public'));

require("./routes")(app)

app.listen(5000,function(){
    console.log("listening on port 5000");
})
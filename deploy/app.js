var express = require("express");
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.listen(5002, function(){
  console.log("5002端口开启")
})

var express = require('express');
var setting = require('./dbConfig');

var app = express();
var route = require('./routes/route');


app.listen(setting.webPort);
console.log("app running on "+setting.webPort);

route.serve(app,express);


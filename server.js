var express = require('express');
var setting = require('./dbConfig');
//var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
//var bodyParser = require('body-parser');
var app = express();
var route = require('./routes/route');
//var db = require('./core/db');
//app.use(express.static(__dirname + '/public'));
//app.engine('handlebars',handlebars.engine);
//app.set('view engine','handlebars');


app.listen(setting.webPort);
console.log("app running on "+setting.webPort);
/*
db.executeSql("CALL insertOrder('anjs1ad@gmail.com','Domestic','Copper,Brass,Iron,Aluminium')",function(err,data){
		if(err){
				console.log(err);
			}	
			else{
				console.log('Inserted successfully');
			}
	});
*/


route.serve(app,express);


/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.get('/',function(req,res){
	res.send('Hello World');

})

app.get('/users',function(req,resp){
	emp.getList(req,resp);
});

app.get('/users/:id',function(req,resp){
	var id = req.params.id;
	emp.get(req,resp,id);
});

app.post('/users',function(req,resp){
	emp.add(req,resp,req.body);
});


app.put('/users',function(req,resp){
	emp.getList(req,resp);
});
*/

var user = require('../controllers/user');
var order = require('../controllers/order');
var items = require('../controllers/items');
var report = require('../controllers/report');
var userAction = require('../controllers/userAction');
var session = require('express-session');
var bodyParser = require('body-parser');

exports.serve=function(app,express){
	var sess;
	app.use(session({secret: 'ssshhhhh'}));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.use('/',express.static(__dirname+'/../Angular'));
/*
	app.get('/',function(req,res){
		console.log(__dirname);
		res.sendFile('index.html',{root: __dirname + '/../Angular'});

	})*/
//************* User Request ***************
	app.get('/users',function(req,resp){
		user.getList(req,resp);
	});

	app.get('/users/:id',function(req,resp){
		var id = req.params.id;
		user.get(req,resp,id);
	});

	app.post('/users',function(req,resp){
		user.add(req,resp,req.body);
	});

	app.put('/users',function(req,resp){
		user.getList(req,resp);
	});

//************* Order Request ***************
	app.get('/order',function(req,resp){
		order.getAllOrder(req,resp);
	});

	app.get('/order:email',function(req,resp){
		var email = req.params.email;
		order.getDashboardData(req,resp,email);
	});

	app.post('/order',function(req,resp){
		console.log("order");
		order.newOrder(req,resp,req.body);
	});

//************** Login ********************
	app.post('/login',function(req,resp){
		userAction.login(req,resp,req.body);
	});

	app.get('/items',function(req,resp){
		items.getItems(req,resp);
	})

//************* Report Generation **********	
app.get('/report/recycledItem',function(req,resp){
	report.recycledQuantity(req,resp);
})

}





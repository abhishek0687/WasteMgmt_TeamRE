var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');
var util = require('util');
var validate = require('../lib/validation');
var order = require('./order.js');

exports.login = function(req,resp,reqBody){
	validate.loginValidation(reqBody.Email,reqBody.Password,function(err,data){
		
		if(!err && data!="email not registered" && data!="incorrect password"){
			order.getDashboardData(req,resp,reqBody.Email);
		}
		else if(err){
			httpMsgs.show500(req,resp,err);
		}
		else{
			
		}
		
	});
};


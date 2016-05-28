var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');
var util = require('util');
var validate = require('../lib/validation');
var order = require('./order.js');
var session = require('express-session');

exports.login = function(req,resp,reqBody,sess){
	validate.loginValidation(reqBody.Email,reqBody.Password,function(err,data){
		
		if(!err && data!="email not registered" && data!="incorrect password"){
			sess.email=reqBody.Email;
			order.getDashboardData(req,resp,reqBody.Email);
		}
		else if(err){
			httpMsgs.show500(req,resp,err);
		}
		else{
			
		}
		
	});
};


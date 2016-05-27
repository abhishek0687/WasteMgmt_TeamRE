var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');
var util = require('util');
var validate = require('../lib/validation');

exports.getList = function(req,resp){
	db.executeSql("select * from user",function(err,data){
		if(err){
			httpMsgs.show500(req,resp,err);
		}	
		else{
			httpMsgs.sendJson(req,resp,data);
		}
	});
};

exports.get = function(req,resp,empno){
	var quer= "select * from user where user_id="+empno;
	db.executeSql("select * from user where user_id="+empno,function(err,data){
		if(err){
			httpMsgs.show500(req,resp,err);
		}	
		else{
			httpMsgs.sendJson(req,resp,data);
		}
	})
};

exports.add = function(req,resp,reqBody){
	
	try{
		if(!reqBody) throw new Error("Input not Valid");
		if(reqBody){
			validate.newUserValidation(reqBody.Email,reqBody.Phone,function(err,data){
				if(!err && !data){
					var sql = "insert into user(FName,LName,Email,Password,UserType_id,Address,Phone,Pincode) values";
					sql += util.format("('%s','%s','%s','%s','%d','%s','%s','%s');", reqBody.FName,reqBody.LName,reqBody.Email,reqBody.Password,1,reqBody.Address,reqBody.Phone,reqBody.Pincode);
					db.executeSql(sql,function(err,data){
						if(err){
							httpMsgs.show500(req,resp,err);
						}	
						else{
							httpMsgs.send200(req,resp);
						}
					});					
				}
				else{
					httpMsgs.customError(req,resp,err,data);
				}
			});
		}
		else{
			throw new Error("Input not Valid");
		}
	}
	catch(ex){
		console.log("Exception");
		httpMsgs.show500(req,resp,ex);
	}
};

exports.update = function(req,resp,reqBody){

};

exports.delete = function(req,resp,reqBody){

};

exports.login = function(req,resp,reqBody){

};


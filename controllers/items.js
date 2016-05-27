var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');

exports.getItems=function(req,resp){
	db.executeSql('select ItemName from item',function(err,data){
		if(!err){
			httpMsgs.sendJson(req,resp,data);
		}
		else{
			httpMsgs.show500(req,resp,err);
		}

	})

}
var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');
var util = require('util');
var validate = require('../lib/validation');



exports.getDashboardData=function(req,resp,email){
	db.executeSql("select oh.order_id,oh.DateOfCreation, \
		oh.ScheduleDateOfpickup,oh.order_status,it.ItemName,od.quantity,u.Email,u.FName,u.LName from\
		 OrderHeader oh inner join OrderDetail od on oh.order_id=od.order_id \
		 inner join user u on oh.user_id=u.user_id inner join item it on it.item_id =od.item_id \
		  where u.Email='"+email+"'",function(err,data){
		  	if(!err){
		  		httpMsgs.sendJson(req,resp,data);
		  	}
		  	else{
		  		httpMsgs.show500(req,resp,err);
		  	}
		  	/*else{
		  		httpMsgs.show500(req,resp,'Havent Placed any order yet');
		  	}*/

		  })
}

exports.getAllOrder=function(req,resp){



	db.executeSql('select oh.order_id,oh.DateOfCreation,oh.order_status, u.FName, \
	 u.LName from orderheader oh inner join user u on oh.user_id=u.user_id',function(err,data){
		  	if(!err && data!=""){
		  		httpMsgs.sendJson(req,resp,data);
		  	}
		  	else if(err){
		  		httpMsgs.show500(req,resp,err);
		  	}
		  	else{
		  		httpMsgs.show500(req,resp,'Havent Placed any order yet');
		  	}

		  })	
}

exports.newOrder=function(req,resp,reqBody){ //itemList.toString()
	db.executeSql("CALL insertOrder('"+reqBody.Email+"','"+reqBody.Itype+"','"+reqBody.itemList.toString()+"')",function(err,data){
		if(err){
			console.log(err);
			httpMsgs.show500(req,resp,err);
			}	
			else{
				httpMsgs.send200(req,resp);
			}
	});

}

/* Old order status
'select oh.order_id,oh.DateOfCreation, \
		oh.ScheduleDateOfpickup,oh.order_status,it.ItemName,od.quantity,u.Email,u.FName,u.LName from\
		 OrderHeader oh inner join OrderDetail od on oh.order_id=od.order_id \
		 inner join user u on oh.user_id=u.user_id inner join item it on it.item_id =od.item_id'

		 */
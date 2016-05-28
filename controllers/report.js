var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');


exports.recycledQuantity=function(req,resp){
	db.executeSql('select i.ItemName,sum(od.quantity) as Quantity \
		from orderdetail od inner join item i on i.item_id = od.item_id group by od.item_id;',function(err,data){
				if(!err && data!=""){
		  		httpMsgs.sendJson(req,resp,data);
		  	}
		  	else if(err){
		  		httpMsgs.show500(req,resp,err);
		  	}
		  	else{
		  		httpMsgs.show500(req,resp,'No Item Recycled');
		  	}
	})

	exports.monetaryReport=function(req,resp){
		db.executeSql(' select i.ItemName,sum(od.quantity) as Quantity, \
		 (sum(od.quantity)*i.ratePerUnit) as Price from orderdetail od inner join\
		  item i on i.item_id = od.item_id group by od.item_id;',function(err,data){
				if(!err && data!=""){
		  		httpMsgs.sendJson(req,resp,data);
		  	}
		  	else if(err){
		  		httpMsgs.show500(req,resp,err);
		  	}
		  	else{
		  		httpMsgs.show500(req,resp,'No Item Recycled');
		  	}
		  })
	}

	exports.environmentMetrix=function(req,resp){
		db.executeSql(' select i.ItemName,\
		 (sum(od.quantity)*i.emmisionSavedPerUnit) as EmmisionSaved from orderdetail od inner join\
		  item i on i.item_id = od.item_id group by od.item_id;',function(err,data){
				if(!err && data!=""){
		  		httpMsgs.sendJson(req,resp,data);
		  	}
		  	else if(err){
		  		httpMsgs.show500(req,resp,err);
		  	}
		  	else{
		  		httpMsgs.show500(req,resp,'No Item Recycled');
		  	}
		  })
	}


}




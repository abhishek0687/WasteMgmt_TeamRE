var mysql = require('mysql');
var settings = require('../dbConfig');

exports.executeSql = function(sql,callback){
	var conn = new mysql.createConnection(settings.dbConfig);
	conn.connect();
	conn.query(sql,function(err,recordset){
		if(err){
			callback(err,null);
		}
		else{
			callback(null,recordset);
		}
	});
	
	/*.then(function(){
		var req = new mysql.Request(conn);
		req.query(sql)
		.then(function(recordset){
			callback(recordset)
		})
		.catch(function(err){
			console.log(err);
			callback(null,err);
		})
	})
	.catch(function(err){
		console.log(err);
		callback(null,err)
	});*/

}
var db = require('../core/db');

exports.newUserValidation=function(email,phone,callback){
		db.executeSql("select user_id from user where Email ='"+email+"'",function(err,data){
			if(!err){
				if(data==""){
					db.executeSql("select user_id from user where Phone ='"+phone+"'",function(err,data){
						if(!err){
							if(data == ""){
								return callback(null,null)
							}
							else{
								return callback(null,data)
							}
						}
						else{
							return callback(err,null)
						}
					});
				}
				else{
					return callback(null,data);
				}		
			}
			else{
				return callback(err,null);
			}
		});
	}

exports.loginValidation=function(username,password,callback){
	db.executeSql("select password,user_id from user where email = '"+username+"'",function(err,data){

		if(!err && data.length!=0 && data[0].password==password){
			callback(null,data[0].user_id);
		}
		else if(err){
			callback(err,null);
		}
		else if(!err && data.length!=0 && data[0].password!=password){
			callback(null,"incorrect password");
		}
		else if(!err && data.length==0){
			callback(null,"email not registered");
		}
		
	})
}
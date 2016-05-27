var settings = require('../dbConfig');

exports.show500 = function(req,resp,err){
	resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	if(settings.httpMsgsFormat === "HTML"){
			resp.writeHead(500,"Internal error occured",{"Content-type":"text/html"});
			resp.write("<html><head><title>500</title></head><body>500: Internal Error. Details: "+ err+"</body></html>");
	}
	else{
			resp.writeHead(500,"Internal error occured",{"Content-type":"application/json"});
			resp.write(JSON.stringify({data:"Error Occured:"+err}));
			console.log(err);
	}
	resp.end();
}

exports.sendJson=function(req,resp,data) {
	resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  resp.writeHead(200,{"Content-Type":"application/json"});
	if(data){
		resp.write(JSON.stringify(data));	
	}
	resp.end();
}

exports.show405 = function(req,resp){
	resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	if(settings.httpMsgsFormat === "HTML"){
			resp.writeHead(405,"Method not Supported",{"Content-type":"text/html"});
			resp.write("<html><head><title>405</title></head><body>405:Method not Supported</body></html>");
	}
	else{
			resp.writeHead(405,"Method not Supported",{"Content-type":"application/json"});
			resp.write(JSON.stringify({data:"Method not Supported"}));
	}
	resp.end();
}

exports.show404 = function(req,resp){
	resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	if(settings.httpMsgsFormat === "HTML"){
			resp.writeHead(404,"Resource not found",{"Content-type":"text/html"});
			resp.write("<html><head><title>404</title></head><body>404:Resource not found</body></html>");
	}
	else{
			resp.writeHead(404,"Resource not found",{"Content-type":"application/json"});
			resp.write(JSON.stringify({data:"Resource not found"}));
	}
	resp.end();
}



exports.show413 = function(req,resp){
	resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	if(settings.httpMsgsFormat === "HTML"){
			resp.writeHead(413,"Request entity too large",{"Content-type":"text/html"});
			resp.write("<html><head><title>413</title></head><body>413:Request entity too large</body></html>");
	}
	else{
			resp.writeHead(413,"Request entity too large",{"Content-type":"application/json"});
			resp.write(JSON.stringify({data:"Request entity too large"}));
	}
	resp.end();
}


exports.send200 = function(req,resp){
	resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	resp.writeHead(200,{"Content-Type":"application/json"});
	resp.end();
}


exports.customError = function(req,resp,err,data){
	resp.header("Access-Control-Allow-Origin", "*");
  resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  resp.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	if(err){
		this.show500(req,resp,err);
	}
	else{
		this.show500(req,resp,"User/Phone already registered");
	}
}
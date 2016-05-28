
angular
	.module('ngWaste')
	.constant('ENDPOINT_URI','http://localhost:9001/')
	.service('wasteFactory',function($http,ENDPOINT_URI,$httpParamSerializerJQLike){
		//$http.defaults.headers.common = {};
  	//$http.defaults.headers.post = {};
  	$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  	/*$http.defaults.headers.put = {};
  	$http.defaults.headers.patch = {};*/
		var service = this;

	/*******User ********/
		service.all=function(){
			return $http.get(ENDPOINT_URI+'users');
		};
		service.create=function(newUser){
			return $http.post(ENDPOINT_URI+'users',$httpParamSerializerJQLike(newUser));

		};

		service.validateLogin = function(credentials){
			return $http.post(ENDPOINT_URI+'login',$httpParamSerializerJQLike(credentials));
		}

	/******* Report ********/
		service.recycleItemReport = function(){
			return $http.get(ENDPOINT_URI+'report/recycledItem');
		}

		service.monetaryReport = function(){
			return $http.get(ENDPOINT_URI+'report/monetary');
		}

		service.environmentMetrix = function(){
			return $http.get(ENDPOINT_URI+'report/environmentMetrix');
		}


	/******** UI Data *********/
		service.getItems=function(){
			return $http.get(ENDPOINT_URI+'items');
		};

	/****** Order **************/
		service.placeOrder=function(order){
			console.log('placing order');
			return $http.post(ENDPOINT_URI+'order',$httpParamSerializerJQLike(order));
		};

		service.getAllOrder = function(){
			return $http.get(ENDPOINT_URI+'order');
		}

	})

/*

	.factory('cribsFactory',function($http){

		var baseUrl = 'http://localhost:9001/users'
		return{
			getCribs:function(){
				return $http.get(baseUrl);	
			}
		}
	});

*/

/*

angular
	.module('ngCribs')
	.factory('cribsFactory',function($http){
		var baseUrl = 'http://localhost:9001/users'
		return{
			getCribs:function(){
				return $http.get(baseUrl);	
			}
		}
	});



*/
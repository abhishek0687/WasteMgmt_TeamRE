angular
	.module('ngWaste')
	.factory('sessionService',function(){
		return function name(){
			set:function(key,value){
				return sessionStorage.setItem(key,value)
			}
		}
	})
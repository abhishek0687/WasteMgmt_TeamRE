angular
	.module('ngWaste')
	.controller('wasteControllers',function($scope,wasteFactory){
		$scope.dataSource = {
  		"chart": {
    		"caption": "Quantity of Waste Recycled!",
    		"captionFontSize": "20",
    		"xAxisName": "Items",
     		"yAxisName": "Quantity (In Kg)",
     		"theme": "ocean"
    		},
  		"data": []
		};

		$scope.items;
		wasteFactory.getItems()
			.success(function(data){
				$scope.items=data;
			})
			.error(function(error){
				console.log(error);
			})

		wasteFactory.recycleItemReport()
			.success(function(data){
				angular.forEach(data,function(v,k){
					$scope.dataSource.data.push({"label":v.ItemName,"value":v.Quantity});
				})
			})
			.error(function(error){
				console.log(error);
			})


		$scope.placeOrder = function(order) {
			order.Itype = 'Domestic';
			console.log(order);
			wasteFactory.placeOrder(order)
				.success(function(data){
					alert("Order successfully placed");
				})
				.error(function(error){
					console.log('placeorder');
					console.log(error);
					alert(error);
				})
		}


		$scope.addUser = function(newUser){
			wasteFactory.create(newUser)
				.success(function(data){
					console.log("data "+data);
					alert("user successfully regisered");
					//window.location.href="/users";
				})
				.error(function(error){
					console.log(error);
				})
		}

		$scope.login = function(credentials){
			wasteFactory.validateLogin(credentials)
				.success(function(data){
					if(data!=""){
						console.log(data);
						console.log($scope.dataSource);
					}
					else{
						console.log('no data');
					}
					console.log($scope.dataSource);
					redirectTo: '/about';
					
				})
				.error(function(error){
					console.log(error)
				})
		}
	});


/*
		$scope.user;
		wasteFactory.all()
			.success(function(data){
				$scope.user=data;
			})
			.error(function(error){
				console.log(error);
		});
*/

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

		$scope.monetaryReport = {
			"chart": {
    		"caption": "Earning",
    		"captionFontSize": "20",
    		"xAxisName": "Items",
     		"yAxisName": "Amount (In Rs)",
     		"theme": "ocean"
    		},
  		"data": []
		}

		$scope.emmisionMetrix ={
			"chart": {
    		"caption": "CO2 Emmision Saved/Item",
    		"captionFontSize": "20",
    		"xAxisName": "Items",
     		"yAxisName": "CO2 (In Cubic Feet)",
     		"theme": "ocean"
    		},
  		"data": []
		}


		$scope.items;
		$scope.allOrderDetail;
		
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

		wasteFactory.monetaryReport()
			.success(function(data){
				angular.forEach(data,function(v,k){
					$scope.monetaryReport.data.push({"label":v.ItemName,"value":v.Price});
				})
			})
			.error(function(error){
				console.log(error);
		})

		wasteFactory.getAllOrder()
		 .success(function(data){
		 		$scope.allOrderDetail = data;
		 })
		 .error(function(error){
		 		console.log(error);
		 })

		 wasteFactory.environmentMetrix()
		 	.success(function(data){
		 			angular.forEach(data,function(v,k){
						$scope.emmisionMetrix.data.push({"label":v.ItemName,"value":v.EmmisionSaved});
					})
		 	})
		 	.error(function(error){
		 		console.log(error);
		 	})

		$scope.placeOrder = function(order) {
			order.Itype = 'Domestic';
			
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
					}
					else{
						console.log('no data');
					}
									
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

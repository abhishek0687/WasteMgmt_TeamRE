angular
	.module('ngWaste')
	.controller('wasteControllers',function($scope,wasteFactory){
		$scope.dataSource = {
    "chart": {
      "caption": "Quantity of Waste Recycled!",
      "captionFontSize": "30",
      "xAxisName": "Items",
       "yAxisName": "Quantity (In Kg)",
       "theme": "ocean"
      },
    "data": []
  };


		$scope.user;
		wasteFactory.all()
			.success(function(data){
				console.log(data);
				$scope.user=data;
			})
			.error(function(error){
				console.log(error);
		});

		wasteFactory.recycleItemReport()
			.success(function(data){
				angular.forEach(data,function(v,k){
					$scope.dataSource.data.push({"label":v.ItemName,"value":v.Quantity});
				})
			})
			.error(function(error){
				console.log(error);
			})

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
					console.log(data);
				})
				.error(function(error){
					console.log(error)
				})
		}
	});


"use strict";

angular.module("project3App").controller("ProductDlgController",
	function ProductDlgController($scope, param, AppResource) {
		var databaseProduct;

		$scope.product = {
			id: "",
			name: "",
			price: "",
			quantitySold: "0",
			quantityInStock: "0",
			imagePath: ""
		};
		
		if (param) {
			AppResource.getProduct(param).success(function(product) {
				$scope.product = angular.copy(product);
				databaseProduct = product;
			}).error(function() {
				// TODO: error handler, failed to load seller info
				console.log("Product not found");
			});
		}

		var pristineProduct = $scope.product;
		$scope.onOk = function onOk() {
			// todo: validation
			$scope.submitForm = function(isValid){
				if(isValid){
					databaseProduct = $scope.product;
					$scope.$close(databaseProduct);
				}
				else{
					console.log("Form is not valid");
				}
			};
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};
	});
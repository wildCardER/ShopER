"use strict";

angular.module("project3App").controller("ProductDlgController",
	function ProductDlgController($scope, param, AppResource) {
		


		$scope.product = {
			name: "",
			price: "",
			quantitySold: "0",
			quantityInStock: "0",
			imagePath: ""
		};
		if (param) {
			AppResource.getSellerProducts(param).success(function(product) {
				$scope.product = product;
			}).error(function() {
				// TODO: error handler, failed to load seller info
				console.log("No products available");
			});
		}

		$scope.onOk = function onOk() {
			// todo: validation
			$scope.submitForm = function(isValid){
				if(isValid){
					$scope.$close($scope.product);
					console.log("Form Submitted");
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
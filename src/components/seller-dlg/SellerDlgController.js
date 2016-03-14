"use strict";

angular.module("project3App").controller("SellerDlgController",
	function SellerDlgController($scope, param, AppResource) {
		
		var databaseSeller;

		$scope.seller = {
			name: "",
			category: "",
			imagePath: ""
		};
		if (param) {
			AppResource.getSellerDetails(param).success(function(seller) {
				$scope.seller = angular.copy(seller);
				databaseSeller = seller;
			}).error(function() {
				// TODO: error handler, failed to load seller info
			});
		}

		$scope.onOk = function onOk() {
			// todo: validation
			$scope.submitForm = function(isValid){
				if(isValid){
					databaseSeller = $scope.seller;
					$scope.$close(databaseSeller);
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
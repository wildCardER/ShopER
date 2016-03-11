"use strict";

angular.module("project3App").controller("SellerDlgController",
	function SellerDlgController($scope, param, AppResource) {
		$scope.seller = {
			name: "",
			category: "",
			imagePath: ""
		};
		if (param) {
			AppResource.getSellerDetails(param).success(function(seller) {
				$scope.seller = seller;
			}).error(function() {
				// TODO: error handler, failed to load seller info
			});
		}

		$scope.onOk = function onOk() {
			// todo: validation
			$scope.$close($scope.seller);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};
	});
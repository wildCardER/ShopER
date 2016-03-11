"use strict";

angular.module("project3App").controller("SellerDlgController",
	function SellerDlgController($scope) {
		$scope.seller = {
			name: "",
			category: "",
			imagePath: ""
		};

		$scope.onOk = function onOk() {
			// todo: validation
			$scope.$close($scope.seller);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};
	});
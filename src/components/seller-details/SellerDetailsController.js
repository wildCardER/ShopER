"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, param) {
	//TODO: Make and information page for sellers
	

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

	/*	
	$scope.onUpdateSeller = function onUpdateSeller(id) {
		SellerDlg.show(id).then(function(seller) {
			AppResource.updateSeller(id, seller).success(function(seller) {
				centrisNotify.success("sellers.Messages.UpdateSucceeded");
			}).error(function() {
				// TODO: error handler
				centrisNotify.error("sellers.Messages.UpdateFailed");
			});
		});
	};
*/
});
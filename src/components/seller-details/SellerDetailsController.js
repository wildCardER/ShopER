"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams) {
	//TODO: Make and information page for sellers
	
	var sellerid = $routeParams.id;
	AppResource.getSellerDetails(sellerid).success(function(seller) {
		$scope.seller = seller;
		console.log(seller);
	}).error(function() {
		console.log("error");
		// TODO: error handler, failed to load seller info
	});

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
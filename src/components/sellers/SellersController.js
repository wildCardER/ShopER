"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.sortType = 'name'; // set the default sort type
	$scope.sortReverse = false;  // set the default sort order
	$scope.searchSellers = '';     // set the default search/filter term

	$scope.isLoading = true;
	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
	});

	$scope.onAddSeller = function onAddSeller() {
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
				centrisNotify.success("sellers.Messages.SaveSucceeded");
			}).error(function() {
				// TODO: error handler
				centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};

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

});
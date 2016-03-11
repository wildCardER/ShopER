"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
		console.log("test");
	});

	$scope.onAddSeller = function onAddSeller() {
		var peterSellers = {
			name: "peter sellers",
			category: "Movies",
			imagePath: ""
		};

		AppResource.addSeller(peterSellers).success(function(seller) {
			var newSeller = seller;
		}).error(function() {
			// TODO: error handler
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
	};

});
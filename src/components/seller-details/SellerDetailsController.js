"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams) {
	//TODO: Make and information page for sellers
	
	AppResource.getSellerDetails(parseInt($routeParams.id)).success(function(seller) {
		$scope.seller = seller;
	}).error(function() {
		console.log("error");
		// TODO: error handler, failed to load seller info
	});
});
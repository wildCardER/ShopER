"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams, ProductDlg, $route) {
	//TODO: Make and information page for sellers
	
	AppResource.getSellerDetails(parseInt($routeParams.id)).success(function(seller) {
		$scope.seller = seller;
	}).error(function() {
		console.log("error");
		// TODO: error handler, failed to load seller info
	});

	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show(parseInt($routeParams.id)).then(function(product) {
			AppResource.addSellerProduct(parseInt($routeParams.id), product).success(function(product) {
				centrisNotify.success("products.Messages.SaveSucceeded");
				$route.reload();
			}).error(function() {
				// TODO: error handler
				centrisNotify.error("products.Messages.SaveFailed");
			});
		});
	};
});
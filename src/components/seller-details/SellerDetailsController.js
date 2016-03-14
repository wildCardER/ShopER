"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams, ProductDlg, $route, $timeout) {
	//TODO: Make and information page for sellers
	
	AppResource.getSellerDetails(parseInt($routeParams.id)).success(function(seller) {
		$scope.seller = seller;
	}).error(function() {
		console.log("error");
		// TODO: error handler, failed to load seller info
	});
	AppResource.getSellerProducts(parseInt($routeParams.id)).success(function(product){
		$scope.products = product;
	}).error(function(){
		console.log("No products to display");
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

	$scope.onEditProduct = function onEditProduct(id) {
		ProductDlg.showEdit(parseInt(id)).then(function(product) {
			AppResource.UpdateProduct(product).success(function(product) {
				centrisNotify.success("products.Messages.SaveSucceeded");
			}).error(function() {
				// TODO: error handler
				centrisNotify.error("products.Messages.SaveFailed");
			});
		});
	};
});
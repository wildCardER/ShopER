"use strict";

angular.module("project3App").controller("SellerDetailsController",
function SellerDetailsController($scope, AppResource, centrisNotify, $routeParams, ProductDlg) {
	//TODO: Make and information page for sellers
	
	AppResource.getSellerDetails(parseInt($routeParams.id)).success(function(seller) {
		$scope.seller = seller;
		console.log("I'm working?");
	}).error(function() {
		console.log("error");
		// TODO: error handler, failed to load seller info
	});

	console.log("I'm goint to create a scope!");
	$scope.onAddProduct = function onAddProduct() {
		console.log("onAddProduct");
		ProductDlg.show(parseInt($routeParams.id)).then(function(product) {
			console.log("ProductDlg show");
			AppResource.addSellerProduct(parseInt($routeParams.id), product).success(function(product) {
				console.log("success");
				centrisNotify.success("products.Messages.SaveSucceeded");
			}).error(function() {
				// TODO: error handler
				console.log("failure");

				centrisNotify.error("products.Messages.SaveFailed");
			});
		});
	};

	$scope.onTest = function onTest() {
		console.log(":/");
	};
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



/*
		$scope.product = {
			name: "",
			price: "",
			quantitySold: "",
			quantityInStock: "",
			imagePath: ""
		};
		if (param) {
			AppResource.getSellerDetails(param).success(function(seller) {
				$scope.seller = seller;
			}).error(function() {
				// TODO: error handler, failed to load seller info
			});
		}
*/

});
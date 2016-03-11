"use strict";

angular.module("project3App").controller("ProductsController",
function ProductsController($scope, AppResource, param) {

	AppResource.getSellerProducts(param).success(function(product){
		$scope.products = product;
	}).error(function(){
		console.log("No products to display");
	});

}).directive('erCard', function(){
		return{
			restrict: "E",
			scope: {
				productInfo: '=product'
			},
			templateUrl: "productTemplate.html"
		};
});

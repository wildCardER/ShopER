"use strict";

angular.module("project3App").directive('erCard', function(){
	return{
		restrict: "E",
		scope: {
			productInfo: '=product'
		},
		templateUrl: "components/product/productTemplate.html"
	};
});

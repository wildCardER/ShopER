"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate", "tableSort"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	}).when("/seller/:id", {
		controller: "SellerDetailsController",
		templateUrl: "components/seller-details/seller-details.html"
	});
	
	$translateProvider.useStaticFilesLoader({
		prefix: "lang_",
		suffix: ".json"
	});
	$translateProvider.use("is");
});

"use strict";

angular.module("project3App").controller("LanguageController",
function LanguageController($scope, $translate) {
	$scope.onLanguageIS = function onLanguageIS() {
		$translate.use("is");
	};
	$scope.onLanguageEN = function onLanguageIS() {
		$translate.use("en");
	};
});
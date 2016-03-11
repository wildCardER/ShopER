"use strict";

describe("SellersController unit test", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	var controller, $scope;
	beforeEach( module("project3App"));

	var fakeSeller = {
		addSeller: function addSeller(seller) {
			return name === "KalliTester";
		},

	};

	beforeEach(inject(function($controller, $rootScope){
		$scope = $rootScope.$new();
		controller = $controller("SellersController", {
			$scope: $scope,
		});

	}));

	it("Should add a new user to the seller list", function(){
		var seller = "KalliTester";
		$scope.seller = seller;
		controller.addSeller();
		expect(fakeSeller.addSeller).toHaveBeenCalledWith(seller);

	});
});
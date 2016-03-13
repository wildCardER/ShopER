"use strict";

angular.module("project3App").factory("ProductDlg",
	function ProductDlg($uibModal) {
		return {
			show: function(id) {
				var modalInstance = $uibModal.open({
					templateUrl: "components/product-dlg/product-dlg.html",
					controller: "ProductDlgController",
					resolve: {
						param: function () {
							return id;
						}
					}
				});
				return modalInstance.result;
			}
		};
	});
"use strict";

angular.module("project3App").factory("SellerDlg",
	function SellerDlg($uibModal) {
		return {
			show: function(id) {
				var modalInstance = $uibModal.open({
					templateUrl: "components/seller-dlg/seller-dlg.html",
					controller: "SellerDlgController",
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
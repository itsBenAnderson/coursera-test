(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
        var toBuyCtrl = this;
        toBuyCtrl.toBuyItems = ShoppingListCheckOffService.toBuyItems;
        toBuyCtrl.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }
    AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
        var boughtCtrl = this;
        boughtCtrl.boughtItems = ShoppingListCheckOffService.boughtItems;
    }

    function ShoppingListCheckOffService() {
        var service = this;
        service.toBuyItems = [
            { name: "PRL", quantity: 1000 },
            { name: "WAN", quantity: 300 },
            { name: "POLY", quantity: 1000 },
            { name: "LRC", quantity: 500 },
            { name: "BTG", quantity: 100 }
        ];
        service.boughtItems = [];

        service.buyItem = function (itemIndex) {
            var boughtItem = service.toBuyItems.splice(itemIndex, 1);
            service.boughtItems.push(boughtItem[0]);
        };
    }
})();
(function() {
    angular.module('menuItems').controller(
        'MenuCtrl',
        [
            'menuService',
            '$mdSidenav',
            '$mdBottomSheet',
            '$log',
            '$q',
            MenuCtrl
        ]);
    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */

    function MenuCtrl(menuService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.selectedMenuItem = null;
        self.menuItems = [];
        self.selectMenuItem = selectMenuItem;
        self.toggleMenuList = toggleMenuList;
        self.toggleRightNav = toggleRightNav;
        self.closeRightNav = closeRightNav;
        self.action = action;
        self.nextItem = nextItem;


        // Load all menu items
        menuService.
            loadAllMenuItems().
            then(function(items) {
                self.menuItems = [].concat(items);
                self.selectedMenuItem = items[0];
            });


        // *********************************
        // Internal methods
        // *********************************
        /**
         * First hide the bottomsheet IF visible, then
         * hide or Show the 'left' sideNav area
         */

        function toggleMenuList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);
            pending.then(function() {
                $mdSidenav('left').toggle();
            });
        }

        function toggleRightNav() {
            $log.debug("toggle RIGHT is on");
            $mdSidenav('right').toggle()
                .then(function(){
                    $log.debug("toggle RIGHT is done");
                });
        }

        function closeRightNav() {
            $log.debug("close RIGHT is on");

            $mdSidenav('right').close()
                .then(function(){
                    $log.debug("close RIGHT is done");
                });
        }

        /**
         * Select the current avatars
         * @param menuId
         */

        function selectMenuItem(item) {
            self.selectedMenuItem = angular.isNumber(item) ? $scope.menuItems[item] : item;
            self.toggleMenuList();
        }
        /**
         * Show the bottom sheet
         */

        /**
         * Show the next content item
         */

        function nextItem($event) {
            //var user = self.selected;
            //$mdBottomSheet.show({
            //    parent: angular.element(document.getElementById('content')),
            //    templateUrl: '/app/src/users/view/contactSheet.html',
            //    controller: ['$mdBottomSheet', UserSheetController],
            //    controllerAs: "vm",
            //    bindToController: true,
            //    targetEvent: $event
            //})
            //    .then(function (clickedItem) {
            //        clickedItem && $log.debug(clickedItem.name + ' clicked!');
            //    });
        }

        function action($event) {
            var item = self.selectedMenuItem;
            $mdBottomSheet.show({
                parent: angular.element(document.getElementById('content')),
                // TODO: Fix templateUrl
                //templateUrl: './menu-items/view/bottomSheet.ng.html',
                template:
                '<md-bottom-sheet class="md-list md-has-header">' +
                '<md-subheader>' +
                '<span class="name">{{vm.title}}</span>:' +
                '</md-subheader>' +
                '<md-list>' +
                '<md-item ng-repeat="item in vm.items">' +
                '<md-button ng-click="vm.performAction(item)">' +
                // TODO: Fix icon paths . Cannot read property ...
                //'<md-icon md-svg-icon="{{ item.iconUrl }}"></md-icon>' +
                '{{item.name}}' +
                '</md-button>' +
                '</md-item>' +
                '</md-list>' +
                '</md-bottom-sheet>',
                controller: ['$mdBottomSheet', BottomSheetController],
                controllerAs: "vm",
                bindToController: true,
                targetEvent: $event
            }).then(function(clickedItem) {
                clickedItem && $log.debug(clickedItem.name + ' clicked!');
            });

            /*
             * Bottom Sheet controller for the picked CV menu Item Actions
             */
            function BottomSheetController($mdBottomSheet) {
                this.item = item;
                this.title = item.bottomSheet.title;
                this.items = item.bottomSheet.items;
                this.performAction = function(action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }
    }



//
})();
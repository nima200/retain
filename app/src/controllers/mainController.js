retainUIApp.controller('MainController',
    function ($scope, $mdMedia, $mdSidenav) {
        "use strict";
        var self = this;
        self.title = 'Retain';
        this.searchQuery = "";
        self.smallScreen = function () {
            return $mdMedia('sm') || $mdMedia('xs');
        };
        self.openSideNav = function () {
            $mdSidenav('left').open();
        }
    }
);
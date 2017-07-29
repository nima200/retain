'use strict';

var retainUIApp = angular.module('retainUIApp', ['ngResource', 'ngMaterial', 'ngAnimate', 'ivh.treeview'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('light-blue');
    });
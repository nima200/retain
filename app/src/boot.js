'use strict';

var retainUIApp = angular.module('retainUIApp', ['ngResource', 'ngMaterial', 'ngAnimate', 'ivh.treeview'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    })
    .config(function(ivhTreeviewOptionsProvider) {
        ivhTreeviewOptionsProvider.set({
            useCheckboxes: true,
            validate: true,
            expandToDepth: 1/*,
            nodeTpl: '<div ng-include="\'src/views/templates/folder-node.html\'"></div>',
            twistieCollapsedTpl: '<md-icon>keyboard_arrow_right</md-icon>',
            twistieExpandedTpl: '<md-icon>keyboard_arrow_down</md-icon>',
            twistieLeafTpl: '<span>&#8193;</span><md-icon>folder_open</md-icon>'*/
        });
    });

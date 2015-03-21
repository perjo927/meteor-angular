
angular.module('socially',['angular-meteor', 'ui.router'],
               function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});





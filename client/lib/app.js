angular.module('socially',[
    'angular-meteor',
    'ui.router',
    'angularUtils.directives.dirPagination',
    'uiGmapgoogle-maps'
]);

// TODO: DOesn't work when deploying on meteor
//    .config(function($interpolateProvider) {
//    $interpolateProvider.startSymbol('[[');
//    $interpolateProvider.endSymbol(']]');
//});


function onReady() {
    angular.bootstrap(document, ['socially']);
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else {
    angular.element(document).ready(onReady);
}
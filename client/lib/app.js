

angular.module('programmerPer',[
    'angular-meteor',
    'ui.router',
    'angularUtils.directives.dirPagination',
    'uiGmapgoogle-maps',
    'ngMaterial',
    'menuItems'
]);

function onReady() {
    angular.bootstrap(document, ['programmerPer'], [appConfig]);
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else {
    angular.element(document).ready(onReady);
}
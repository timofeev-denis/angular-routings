var nameAppS = angular.module('nameApp', ['ngRoute']);

nameAppS.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        title: 'LIST',
        pageTitle: 'pageTitle LIST',
        template: '<ul><li ng-repeat="name in names"><a href="#{{name}}">{{name}}</a></li></ul>',
        controller: 'NameCtrl'
    }).
    when('/:name', {
        title: 'Detail',
        pageTitle: 'pageTitle Detail',
        templateUrl: 'person-details-template.html',
        controller: 'NameCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
});

nameAppS.controller('NameCtrl', function ($rootScope, $scope, $route, $routeParams) {
    function initCurrentRoute() {
        console.log('initCurrentRoute');
        document.title = $route.current.$$route.title;
    }

    $scope.names = [ 'Ramon', 'Hulio', 'Fernando', 'Huan' ];
    if($routeParams.name != undefined) {
        $scope.name = $routeParams.name;
    }

    initCurrentRoute();
});

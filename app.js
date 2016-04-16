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
        document.title = $route.current.$$route.title;
    }

    $scope.names = [ 'Ramon', 'Hulio', 'Fernando', 'Huan' ];
    if($routeParams.name != undefined) {
        $scope.name = $routeParams.name;
    }

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        //console.log('routeChangeSuccess', current);
        document.title = current.$$route.title;
        //$rootScope.title
    });

    $rootScope.$on('$routeUpdate', function(event, current, previous) {
        console.log('routeUpdate');
        //document.title = current.$$route.title;
        //$rootScope.title
    });

    initCurrentRoute();
});

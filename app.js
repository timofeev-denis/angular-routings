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

nameAppS.factory('names', function() {
    return {
        list: function() {
            return [ 'Ramon', 'Hulio', 'Fernando', 'Huan'];
        },
        list2: function(callback) {
            callback();
        }
    };
});

nameAppS.controller('NameCtrl', function ($rootScope, $scope, $route, $routeParams, names) {
    $scope.names = names.list();
    names.list2(function() {
        $scope.names.push('Robero');
    });
    function initCurrentRoute() {
        console.log('initCurrentRoute');
        document.title = $route.current.$$route.title;
    }

    if($routeParams.name != undefined) {
        $scope.name = $routeParams.name;
    }

    initCurrentRoute();
});

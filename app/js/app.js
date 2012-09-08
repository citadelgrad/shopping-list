'use strict';

var myListModule = angular.module('myList', []);
 
// Declare app level module which depends on filters, and services
angular.module('myList', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/recipes', {template: 'partials/recipe-list.html', controller: RecipesListCtrl});
    $routeProvider.when('/recipes/:recipeId', {template: 'partials/recipe-detail.html', controller: RecipesDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/recipes'});
  }]);

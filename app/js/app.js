'use strict';

//var myListModule = angular.module('myList', []);
 
// Declare app level module which depends on filters, and services
angular.module('myList', ['myList.filters',]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: RecipesListCtrl});
    $routeProvider.when('/shoplist', {templateUrl: 'partials/shop-list.html', controller: ShopListCtrl});
    $routeProvider.when('/recipes', {templateUrl: 'partials/recipe-list.html', controller: RecipesListCtrl});
    $routeProvider.when('/recipes/:recipeId', {templateUrl: 'partials/recipe-detail.html', controller: RecipesDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

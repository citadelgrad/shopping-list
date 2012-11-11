'use strict';

/* Controllers */
RecipesListCtrl.$inject = ['$scope', '$http'];
RecipesDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];

function RecipesListCtrl($scope, $http){

    $http.get('js/data.json').success(function(data) {
        $scope.recipes = data.objects;

    });

    $scope.shopList = []; //{text: 'a start'}
    $scope.addListItem = function() {
        // Can be used for the Shopping List to manually add items
        $scope.shopList.push({text:$scope.shopList.add2List,});
        $scope.shopList.add2List = '';
    }

    $scope.addRecipe2List = function(recipe_obj)  {
        // Here we load the saved list and copy the recipe to a scope.
        $scope.shopList = JSON.parse(localStorage.getItem("shopList"))
        $scope.shopList.push({ recipe:recipe_obj,});
        localStorage.setItem("shopList", JSON.stringify($scope.shopList));
    }

    $scope.recipe = [];
    $scope.recipeDetail = function(recipe_obj) {
        // push State to change the uri
        $scope.recipe.push(recipe_obj);
        localStorage.setItem(recipe_obj.id, JSON.stringify(recipe_obj));
    }
}

function RecipesDetailCtrl($scope, $routeParams, $http) {

    $scope.recipeId = $routeParams.recipeId;
    var recipestr = localStorage.getItem($scope.recipeId);
    var recipejson = JSON.parse(recipestr);
    console.log(recipejson);
    $scope.recipe = recipejson;
}

function ShopListCtrl($scope, $http) {
    $scope.shopList = JSON.parse(localStorage.getItem("shopList"));

    $scope.removeRecipe = function(recipe_obj) {
        var shop_list_json = JSON.parse(localStorage.getItem("shopList"));
        // Loop the list and removed the recipe
        angular.forEach(shop_list_json, function(value, key){ if (value.recipe.id == recipe_obj.id) { shop_list_json.splice(key,1) } });
        // Save the list to localstorage.
        localStorage.setItem("shopList", JSON.stringify(shop_list_json));
        // Update the Angular scope.
        $scope.shopList = shop_list_json;
    }
}

function TodoCtrl($scope) {
    $scope.todos = [
        {text:'learn angular', done:true},
        {text:'build an angular app', done:false}
    ];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.addt, done:false});
    //$scope.addt = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}
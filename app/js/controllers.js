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
        // Here we copy the recipe to a scope
        console.log(recipe_obj);

        $scope.shopList.push({recipe:recipe_obj,});
    }
    $scope.recipe = [];
    $scope.recipeDetail = function(recipe_obj) {
        // push State to change the uri
        $scope.recipe.push(recipe_obj);
        // Send obj to a service
        // https://gist.github.com/3595424
    }
}

function RecipesDetailCtrl($scope, $routeParams, $http) {
  console.log($scope);
   
}



function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
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
'use strict';

/* Controllers */
RecipesListCtrl.$inject = ['$scope', '$http'];
RecipesDetailCtrl.$inject = ['$scope', '$routeParams'];

function RecipesListCtrl($scope, $http){
    $http.get('js/data.json').success(function(data) {
        $scope.recipes = data.objects;
        console.log($scope);
    });

    $scope.shopList = []; //{text: 'a start'}
    $scope.scott = [];
    var arr = new Array();
    $scope.addListItem = function() {
        $scope.shopList.push({text:$scope.shopList.add2List,});
        $scope.shopList.add2List = '';
    }
    $scope.addRecipe2List = function(asdf)  {
        console.log(asdf);

        $scope.scott.push({text:asdf,});
    }
}

function RecipesDetailCtrl($scope, $routeParams) {
  $scope.recipeId = $routeParams.recipeId;
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
 var gists = angular.module('gist', ['angularUtils.directives.dirPagination']);
      gists.controller('gistCtrl', function ($scope, $http){
        $http.get('https://api.github.com/gists/public?per_page=100').success(function(data) {
          $scope.list = data;
        });
        $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
        }
      });

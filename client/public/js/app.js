var portfolio = angular.module("Portfolio", []);

portfolio.controller("PortfolioController",["$scope","$http","$location",function($scope, $http, $location){

  $scope.hello = "Yo yo yo";

  $scope.projects =
  [{
    "name":"RESTaurant",
    "img_url":"images/RESTaurant.jpg",
    "description":"Lorem Ipsum Ipsum"
  },
  {
    "name":"Dress Me",
    "img_url":"images/dress-me.jpg",
    "description":"Lorem Ipsum Ipsum"
  }];

  test = function(){
    console.log($scope.projects[0].name);
  }

  test();

}])

var portfolio = angular.module("Portfolio", []);

portfolio.controller("PortfolioController",["$scope","$http","$location",function($scope, $http, $location){

  $scope.hello = "Yo yo yo";

  $scope.projects =
  [{
    "name":"RESTaurant",
    "img_url":"images/RESTaurant.jpg",
    "description":"Lorem Ipsum Ipsum",
    "url":"https://sams-ugly-restaurant.herokuapp.com/"
  },
  {
    "name":"Dress Me",
    "img_url":"images/dress-me.jpg",
    "description":"Lorem Ipsum Ipsum",
    "url":"https://ga-dress-me-app.herokuapp.com"
  }];

  test = function(){
    console.log($scope.projects[0].name);
  }

  test();

}])

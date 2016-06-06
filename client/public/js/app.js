var portfolio = angular.module("Portfolio", []);

portfolio.controller("PortfolioController",["$scope","$http","$location",function($scope, $http, $location){

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

}])

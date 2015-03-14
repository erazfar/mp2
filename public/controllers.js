var movieControllers = angular.module('movieControllers', []);
var datum;


movieControllers.controller('movieListController', function ($scope, $http) {
  $http.get('./data/imdb250.json').success(function(data) {
  	datum = data;
    $scope.movies = data;
  });

  $scope.orderProp = 'rank';
});

movieControllers.controller('movieDetailController', ['$scope', '$routeParams',
	function($scope, $routeParams, $http) {
	var imdbVal = $routeParams.movieID;

	for (var i = 0; i < datum.length; i++){
		var obj = datum[i];
		if (obj.imdbID == imdbVal){
			$scope.movie = obj;
			var pIndex = i == 0? 249 : i - 1;
			var nIndex = i == 249? 0 : i + 1;
			$scope.prevID = datum[pIndex].imdbID
			$scope.nextID = datum[nIndex].imdbID
		}
	}
}]);

movieControllers.controller('galleryController', function ($scope, $http) {
	$http.get('./data/imdb250.json').success(function(data) {
		datum = data;
		$scope.movies = data;
	});
});
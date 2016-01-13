app = angular.module('viser', [])

// servis za pozivanje google API za obradu RSS
.factory('FeedService', function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    };
});

// app.controller('feedc', ['FeedService', function($scope, FeedService){
app.controller('feedc',  function($scope, FeedService){
  $scope.loadButonText = "Load"; //dugme tekst
  console.log('hello');

  $scope.controllerok = 'test text';
  $scope.loadFeed = function(e){
      FeedService.parseFeed($scope.feedSrc)
      .then(function(res){
          $scope.loadButonText = angular.element(e.target).text();
          $scope.feeds = res.data.responseData.feed.entries;


      });
  };
});

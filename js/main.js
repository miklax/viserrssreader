app = angular.module('viser', [])

// servis za pozivanje google API za obradu RSS
.factory('FeedService', function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    };
});

app.controller('feedc',  function($scope, FeedService){
  $scope.loadButonText = "Load"; //dugme tekst

  $scope.htmlVesti = "";
  // return theString.replace(/^\/|\/$/g, '');


  $scope.loadFeed = function(e){
      FeedService.parseFeed($scope.feedSrc)
      .then(function(res){
          $scope.loadButonText = angular.element(e.target).text();
          $scope.feeds = res.data.responseData.feed.entries;
          $scope.htmlVesti = res.data.responseData.feed.link;
          console.log($scope.htmlVesti);
          // $scope.htmlVesti.replace(/^\"|\"$/g, '');

      });
  };
});

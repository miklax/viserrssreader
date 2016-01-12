var app = angular.module('viserRss', []);

app.factory('FeedService',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    };
});

app.controller("FeedCtrl", ['$scope','FeedService', FeedCtrl]);

const app = angular.module("youtubeApp",[
    "headerModule",
    "searchModule",
    "youtubeModule"
])

.directive('header', function() {
    return {
        templateUrl: './header/header.html'
    };
})
.directive('search', function() {
    return {
        templateUrl: './search/search.html'
    };
})
.directive('youtube', function() {
    return {
        templateUrl: './youtube/youtube.html'
    };
})



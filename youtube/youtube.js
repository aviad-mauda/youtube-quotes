angular.module('youtubeModule', [])
.controller("youtubeController", function($scope, $rootScope,$sce) {
    $scope.$watch('$root.song', () => {
        for(key in $rootScope.songs){
            if($rootScope.songs[key].title === $rootScope.song){
                $scope.quote1 = $rootScope.songs[key].quotes[0].text;
                $scope.quote2 = $rootScope.songs[key].quotes[1].text;
                $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed?v="+$rootScope.songs[key].youtubeId);
                break;
            }
        }
    })
})
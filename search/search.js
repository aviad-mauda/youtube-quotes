angular.module('searchModule', [])

.controller("searchController", function($scope, $rootScope, $http, $sce) {

    
    const getQuotes = () =>{
        $http.get('https://glacial-escarpment-40412.herokuapp.com/songs').then(({data}) => {
            $scope.initData(data);
            
        })
    }
    
    getQuotes();

    $scope.initData = (data) =>{
        $rootScope.songs = data;
        $rootScope.song = "Song Name";
        $rootScope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed?v=dummy");
        $rootScope.quotesCounter = $rootScope.songs.length;
        console.log($rootScope.songs);
        $scope.songsHolder = [];
        $scope.searchedSongs = $scope.songsHolder;
        for(key in $rootScope.songs){
            $scope.songsHolder.push($rootScope.songs[key].title);
        } 
    }

    $scope.search = () =>{
        if($scope.searchValue == ""){
            $scope.searchedSongs = $scope.songsHolder;
        } else {
            $scope.searchValue =  $scope.searchValue.toLowerCase();
            $scope.searchedSongs = []; // TODO search only the results
            angular.forEach($scope.songsHolder, (song) => {
                if(song.toLowerCase().indexOf($scope.searchValue) !== -1){
                    $scope.searchedSongs.push(song); 
                }
            }) 

        }
    }

    $scope.playSong = (song) => {
        $rootScope.song = song;
    }
})
    

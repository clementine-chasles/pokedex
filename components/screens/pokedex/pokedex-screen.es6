app.controller('PokedexScreen', ($scope, $http) => {

	$scope.pokemons = [];
	for(var i = 1; i < 10; i++) {
		$http({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/' + i
        }).success(function(data){
            // With the data succesfully returned, call our callback
            $scope.pokemons.push(data);
        }).error(function(){
            console.log("error");
        });
	}

    var init = () => {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();
});
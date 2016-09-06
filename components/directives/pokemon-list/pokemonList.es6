app.component('pokemonList', {
    templateUrl: 'pokemon-list.html',
    controllerAs: 'pokemon',
    bindings: {
        name: '@',
		img: '@'
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

    }
});

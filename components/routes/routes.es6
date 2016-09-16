app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pokedex-screen.html',
		controller: 'PokedexScreen'
      }).
      when('/contact', {
        templateUrl: 'contact-screen.html',
		controller: 'ContactScreen'
      }).
      when('/login', {
        templateUrl: 'login-screen.html',
		controller: 'LoginScreen'
      }).
      when('/profile', {
        templateUrl: 'profile-screen.html',
		controller: 'ProfileScreen'
      }).
      when('/about', {
        templateUrl: 'contact-screen.html',
		controller: 'ContactScreen'
      }).otherwise({});
  }]);
  
  // .otherwise({redirectTo: '/'})
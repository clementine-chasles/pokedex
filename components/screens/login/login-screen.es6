app.controller('LoginScreen', ($scope, $cookies, $http, $location, Helper) => {

    var init = () => {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };
	
	var login = () => {
		console.log("login !!!! " + Helper.isLoggedIn());
		console.log("email : " + $scope.email);
		if(!Helper.isLoggedIn()) {

			$cookies.put('token', 'rhaerhreh');
			console.log("cookie : " + $cookies.get('token'));
			$location.path('/');
			
		} else {
			console("already logged in");
		}
	};

    init();
	
	$scope.login = login;
	
});
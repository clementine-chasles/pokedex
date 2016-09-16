app.controller('LoginScreen', ($scope, $cookies, $http, Helper) => {

    var init = () => {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };
	
	var login = () => {
		console.log("login !!!! " + Helper.isLoggedIn());
		console.log("email : " + $scope.email);
		if(!Helper.isLoggedIn()) {

			$cookies.put('token', 'rhaerhreh');
			console.log("cookie : " + $cookies.get('token'));
			
		} else {
			console("already logged in");
		}
	};

    init();
	
	$scope.login = login;
	
});
app.controller('LoginScreen', ($scope, $cookies, Helper) => {

    var init = () => {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };
	
	var login = () => {
		console.log("login !!!! " + Helper.isLoggedIn());
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




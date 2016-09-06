app.component('headerItem', {
    templateUrl: 'header.html',
    controllerAs: 'header',
    bindings: {
    },
    controller: function ($scope, Helper) {
	
		$scope.isLoggedIn = Helper.isLoggedIn;
		$scope.logout = () => {
			console.log("logout");
			Helper.logout();
		}

        var init = () => {};

        init();
		
    }
});

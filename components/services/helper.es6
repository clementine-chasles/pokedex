app.service('Helper', ($cookies) => {

    var isLoggedIn = () => {
        return $cookies.get('token');
    };
	
	var logout = () => {
		$cookies.remove('token');
	};

    var init = () => {
    };

    init();

    return {
        isLoggedIn,
		logout
    }
});


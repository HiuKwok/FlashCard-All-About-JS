var singletonClass = (function () {

	var instance;

	function init() {
		//Private method
		function privateMethod () {
			console.log ("I m a private");
		}

		var privateVar = "Var";

		return {
			publicMethod: function () {
				console.log("Public method");
			},

			publicProperty: "Porp"
		};


		//Get instance
	};


	return {
		//Return singleton instanse if exist
		getInstance: function () {
			if (!instance ) {
				instance = init();
			}
			return instance;
		}


	}

	

})();
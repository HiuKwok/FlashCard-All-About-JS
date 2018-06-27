(function () {
	var manager = {

		execute: function ( name ) {
    		return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
		};
	} 
})();

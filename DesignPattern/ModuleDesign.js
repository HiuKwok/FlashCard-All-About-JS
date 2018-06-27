/*
As the article mention, provide a loose coupling to support well-structured code.
	- modules ~= classes on JS. 
	- Provide encapsulation (Private method)
	- Return a object with method provided

ref:https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
*/


var modDesign = (function () {


	//Private scope
	var private_var = 'private';

	var print_private = function () {
		console.log(private_var);
	}

	var set_private = function (inComing) {
		private_var = inComing;
	}

	return {
		//Public scope
		getContent: function () {
			print_private();
		},

		setContent: set_private
	};

})();



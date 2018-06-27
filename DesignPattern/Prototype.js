/*
Following piece of code show how to define a basic prototype.

	Note: As prototype plattern is faster than module plattern,
but only in perfmance-intensive situations which need to maintain
a huge amount of small object creation. Other-wise u probable won't
notice the different as JS runtime is keep improving the gap of 
performance between module && prototype is getting smaller and smaller.
*/



//var declare || method if need to be private
var queryEngine = function () {
	this.count = 0;
	this.serverStatus = 'ok';
	this.session_name = 'default';
}


//Expose method:
//Decide what to expost to outside world
queryEngine.prototype = function (){

	return {
		toString: function () {
			console.log('Session name: ' + session_name);
			console.log('Status:       ' + serverStatus);
			console.log('Count:        ' + count);		
		}
	};

	
}();




//Prototype in es5 (native)
var car = {
	name: "Tesla model x",

	drive: function () {
		console.log("Driving....");
	}

	fuel: function () {
		console.log("fueling...");
	}
}

var myCar = Object.create(car);

console.log (myCar.name);


//And constructor can be wrapped like this:
var carProto = {
	init: function (carModel ) {
		this.model = carModel;
	},

	getModel: function () {
		console.log ("This model of this vehicle: " + this.model);
	}
};

function vehicle( model ) {
 
  function F() {};
  F.prototype = vehiclePrototype;
 
  var f = new F();
 
  f.init( model );
  return f;
 
}
 
var car = vehicle( "Ford Escort" );
car.getModel();



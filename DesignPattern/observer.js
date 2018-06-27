function ObserverList() {
	this.observerList = [];
}


//Basic operation
ObserverList.prototype.add = function (obj) {
	return this.observerList.push(obj);
}

ObserverList.prototype.count = function (obj) {
	return this.observerList.length;
}

ObserverList.prototype.get = function (index) {
	if (index > -1 && index < this.observerList.length) {
		return thsi.observerList[index];
	}
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
	var i = startIndex;

	while( i < this.observerList[i].length) {
		if( this.observerList[i] === obj) {

			return i;
		}
		i++;
	}
	return -1;
}


//---------Subject-----------

function Subject () {
	this.observers = new ObserverList();
}


//Make use of indexOf
Subject.prototype.removeObserver = function (observer) {
	this.observers.removeAt( this.observers.indexOf( observer, 0) );
};

//Most important bit
Subject.prototype.addObserver = function ( observer) {
	this.observers.add(observer);
};

//Notfy
Subject.prototype.notify = function (context) {
	var observerCount = this.observers.count();
	for (var i=0 ; i<observerCount; i++) {
		this.observers.get(i).update( context);
	}
}


//Then Observer can be crafrted on this way
function Observer() {
	this.update = function () {
		//.....
	}
}



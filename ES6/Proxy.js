{
//proxy take two parameters
    let target = {};
    let handler = {};
    //Handler is where the extra implementation seat and target is the method that implemented to.
    let proxy = new Proxy(target, handler );
}


//Simple usage
{
    //In this case get method got handled, so matter which parameters asked from the object,,
    //It's gonna return 35 as result;
    let proxy = new Proxy({}, {
        get: function (target, property){
            return 35;
        }
    })

//    Ask itself
    console.log("Proxy itself:", proxy.time);
}

//With a valid target
{
    let target = {};
    let handler = {};
    let proxy = new Proxy(target, handler);
    //Set implementation on proxy
    proxy.a = 'b';
    console.log("Accesss property a:", target.a);
}

//One of the best pracitice would be set it as .proxy property
{
    let obj = { proxy: new Proxy ({}, {})};
}

{
    let handler = {
        get: function(target, name) {
            if (name === 'prototype') {
                return Object.prototype;
            }
            return 'Hello, ' + name;
        },

        apply: function(target, thisBinding, args) {
            return args[0];
        },

        construct: function(target, args) {
            return {value: args[1]};
        }
    };

    var fproxy = new Proxy(function(x, y) {
        return x + y;
    }, handler);
    //In this way, the initial declaration wouldn't work, cuz interrupted by handler implementation.
    fproxy(1, 2) // 1
    new fproxy(1, 2) // {value: 2}
    fproxy.prototype === Object.prototype // true
    fproxy.foo === "Hello, foo" // true
}


//Receiver equal itself.
{
    const proxy = new Proxy({}, {
        get: function(target, property, receiver) {
            return receiver;
        }
    });
    proxy.getReceiver === proxy // true

}



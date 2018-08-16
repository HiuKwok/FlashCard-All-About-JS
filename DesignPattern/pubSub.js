/*
* Ref: http://marklin-blog.logdown.com/posts/300302-javascript-asynchronous-programming-method-pub-sub
*
* Simple Pub/Sub pattern
* */

/*Similar to hash table with a link list on each bucket*/
let hub = {
    events: {},

    //Arrow can't access this.scope
    sub: function (event, handler){

        //Create category if not exist
        if (!this.events[event]) {
            this.events[event] = [];
        }
        //Push new action when events got call
        this.events[event].push(handler);
    },

    pub: function (event, data){

    //    Trigger a event which is not reg yet?
        if (!this.events[event] || this.events[event].length <1 ){
            console.log("No such event");
            return;
        }else {
            this.events[event].forEach( listener => {
                listener(data || {});
            } )
        }
    }
}


hub.sub("Add", (d) => { console.log("Add 1" + d)});
hub.sub("Add", (d) => { console.log("Add 2" + d)});
hub.sub("Add", (d) => { console.log("Add 3" + d)});

hub.pub("Add", 'Hello data');
hub.pub("Add");

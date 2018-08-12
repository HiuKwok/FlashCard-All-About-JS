


/*
* As you may notice, even though either resolve || reject called,
* the funciton would still continue to execute until it hit return statement
* or very last of line.
*
* Noted that once either resolve || reject is called, the promise
* itself would change the status from pending to fulfilled. Even
* opposite state got called later of the function. It wouldn't have any effect at all.
*
* Ref: https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/contents/basic_usage.html
* */

//Util function
function onResolve (value){
    console.log("On resolve: ", value);
    return value;
}

function onResolveError (value){
    console.log("On resolve error: ", value);
    throw new Error('error!');
}

function onReject (reason){
    console.log("On reject: ", reason);
}


//The promise context would be execute once assigned to const p but not wait till, .then( ) be called.
const p = new Promise( (resolve, reject) => {

    resolve("Success");
    console.log("Still continue to execute?");
    //Reject won't work.
    reject("Error: resaon");
});

//Registered a handled upon p.fulfilled. But the promise gonna be executed way early this line.
//p.then(onResolve, onReject);


const emptyPromise = new Promise ( () => {});
//Neither of method would be called, cuz the promise body is empty.
emptyPromise.then(onResolve, onReject);

//Chain would work as long as onResolve return the value.
//As onReject would look tedious when keep eppearing multiple time on chain.
//Throw error to catch would be more appropriate.

/*
* In this case onResolveError a error, it would be catch by onReject.
*  - catch, 方法相當於then(undefined, onRejected)
*  - Once catch block is execute, it would turn the status back to fulfill, because it does fulfilled catch operation.
*  Which is a bit confusing.
* */
p.then(onResolve, onReject).then(onResolveError).catch(onReject).then(onResolve, onReject);

//Suitable to be used while then is not available
const thenable1 = {
    then: function(onFulfill, onReject) {
        onFulfill('fulfilled!')
    }
}
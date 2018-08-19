var MongoClient = require('mongodb').MongoClient;
//Ref: https://www.w3schools.com/nodejs/nodejs_mongodb.asp
//In MongoDB, a database is not created until it gets content!
//So no matter mydb exist or not .coonect doesn't confirm it at all.
const url = "mongodb://localhost:27017/mydb";
const urlNotDb = "mongodb://localhost:27017";

function createDb (db){
    console.log("Database created");
    db.close();
}

function printErr(err){
    console.log(err);
}

function insertJoinRecord (db){
    let dbo = db.db("mydb");
    let myobj = {  _id: 1, product_id: 154, status: 1};
    dbo.collection("orders").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
}

function insertJoinRecord_2 (db){
    let dbo = db.db("mydb");
    let myobj = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemons' },
        { _id: 156, name: 'Vanilla Dreams' }
    ];
    dbo.collection("products").insert(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
}


function insertRecord (db){
    let dbo = db.db("mydb");
    let myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(insertMany, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
}

function insertMultiple (db){
    var dbo = db.db("mydb");
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log(res);
        db.close();
    });
}


//Return the first occurance of record
function findOne (db){
    let dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
}

//Find == return all the occurances
function findAll (db){
    let dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}
//Projection, only certain remain
//One thing which is not listed on W3 school is fields need to be defined.
//Ref: https://stackoverflow.com/questions/47732061/node-js-mongodb-find-with-projection-to-exclude-id-still-returns-it
function findProjection (db){
    let dbo = db.db("mydb");
    dbo.collection("customers").find({},{  fields:{  _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}

function findFilter (db){
    let dbo = db.db("mydb");
    let query = { address: "Park Lane 38"};
    //Regex can also be used
    dbo.collection("customers").find({},{query}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}

function findRegex (db){
    let dbo = db.db("mydb");
    let query = { address: /^S/ };
    //Regex can also be used
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

}

function sortByName (db){
    let dbo = db.db("mydb");
    let mysort = {name: 1};
    let field =  {fields:{  _id: 0, name: 1, address: 1 } };
    //Regex can also be used
    dbo.collection("customers")
        .find({},field)
        .sort(mysort)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
}

function sortByNameDesc (db){
    let dbo = db.db("mydb");
    let mysort = {name: -1};
    let field =  {fields:{  _id: 0, name: 1, address: 1 } };
    //Regex can also be used
    dbo.collection("customers")
        .find({},field)
        .sort(mysort)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
}

function sortByNameTopFive (db){
    let dbo = db.db("mydb");
    let mysort = {name: 1};
    let field =  {fields:{  _id: 0, name: 1, address: 1 } };
    //Regex can also be used
    dbo.collection("customers")
        .find({},field)
         .sort(mysort)
        .limit(5)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
}

function deleteOne (db) {
    let dbo = db.db("mydb");
    let myquery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("Rows deleted: ", obj.result.n);
        db.close();
    });
}

function deleteMoany (db) {
    let dbo = db.db("mydb");
    let myquery = { address: /^O/ };
    dbo.collection("customers").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        console.log("Rows deleted: ", obj.result.n);
        db.close();
    });
}

function dropCollection (db) {
    var dbo = db.db("mydb");
    dbo.collection("customers").drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
}

function updateOne (db){
    let dbo = db.db("mydb");
    let myquery = { address: "Valley 345" };
    //Set mean only update specific field
    let newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    //updatemany is similar to updateOne
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("Rows affected: ", res.result.n);
        db.close();
    });
}

function aggregate (db) {
    let dbo = db.db("mydb");
    dbo.collection('orders').aggregate([
        { $lookup:
                {
                    from: 'products',
                    localField: 'product_id',
                    foreignField: '_id',
                    as: 'orderdetails'
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
}


function closeDB (db){
    db.close();
}


//Collection == table
// MongoClient.connect(url)
//     .then(createDb)
//     .catch(printErr);
//
//
// MongoClient.connect(urlNotDb)
//     .then(insertRecord)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(insertMultiple)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(findOne)
//     .catch(printErr);
//
// MongoClient.connect(urlNotDb)
//     .then(findAll)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(findProjection)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(findFilter)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(findRegex)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(sortByName)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(sortByNameDesc)
//     .catch(printErr);


// MongoClient.connect(urlNotDb)
//     .then(deleteOne)
//     .catch(printErr);
//
//
// MongoClient.connect(urlNotDb)
//     .then(deleteMoany)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(dropCollection)
//     .catch(printErr);
//

// MongoClient.connect(urlNotDb)
//     .then(updateOne)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(sortByNameTopFive)
//     .catch(printErr);


// MongoClient.connect(urlNotDb)
//     .then(insertJoinRecord)
//     .catch(printErr);

// MongoClient.connect(urlNotDb)
//     .then(insertJoinRecord_2)
//     .catch(printErr);
//

MongoClient.connect(urlNotDb)
    .then(aggregate)
    .catch(printErr);











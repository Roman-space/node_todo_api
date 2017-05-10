const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log(err);

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, null, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // make some query
    db.collection('Todos').find({completed: "Why not?"}).toArray().then((doc) => {
        console.log('Completed: why not?');
        console.log(JSON.stringify(doc, null, 2));
    }, (err) => {
        console.log('Nope', err);
    });

    // get some data for id 
    db.collection('Todos').find({
        _id: new ObjectID('58ea9fb715dd034d578e095c')
    }).toArray().then((doc) => {
        console.log('Completed: _id its an Object!');
        console.log(JSON.stringify(doc, null, 2));
    }, (err) => {
        console.log('Nope', err);
    });

    // get count of object.
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => console.log('Unable to get count'));
    db.close();
});

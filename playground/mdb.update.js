/*
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log(err);

    console.log('connected');

    db.collection('Todos').findOneAndUpdate({ 
        _id: new ObjectID('5912428f80e353627639afca')
    }, {
        $set: {
            name: "lets do it"
       }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });
    db.close();
});
*/
const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    if (err) return console.error('connection error', err);

    console.log('do it');

    db.collection('User').findOneAndUpdate({
        _id: 19051
    }, {
        $set: {
            name: 'World'
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });
    db.close();
});


const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log('err');
    
    /*
    db.collection('User').deleteMany({name: 'R'}).then((res) => {
        console.log(res);
        console.log(res.ok);
    });
    */
    db.collection('User').findOneAndDelete({name: 'RA'}).then((res) => {
        console.log(res);
    });
    db.close();
});



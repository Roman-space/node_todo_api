const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log(err);
    
    // delete Many
    db.collection('Todos').deleteMany({name: "I cant"}).then((result) => {
        console.log(result);
    });
    // delete One
    db.collection('Todos').deleteOne({completed: "Why not?"}).then((res) => {
        console.log(res);
    });
    // findAndDelete find -> return -> delete object. 
    // if you know only id - and need to return some text or data - when th. ch
    db.collection('Todos').findOneAndDelete({_id: new ObjectID('5912425580e353627639afb9')}).then((res) => {
        console.log(res);
    });
    // 

    console.log('Connected to db');

});

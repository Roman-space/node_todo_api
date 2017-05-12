How to start mongo?
go to mongo/bin

$ ./mongod --dbpath path/to/dbfolder

then connect with
$ ./mongo

#_id = not an auto incremented integer.#

mongo desined to scale out very easily
    add more db servers to handle extra load.

##inside of id##
default way.
    0-4 - timestamp - moment in time when id was created.
    4-7 - machine id 
    7-9 - process id
    last id 3 - just a random value.
and I can do this

```javascript 
// table === Collection
db.collection('NameOfTable').insertOne({
    _id: 1,
    name: "boom"
}, (err, res) => {
    if (err) return console.log(err);
    ...
    /**
     * how to get timestamp from id
    */
    console.log(res.ops[0]._id.getTimestamp());
    /**
     * getTimestamp() - func without arguments
     * res.ops = get all object that we add to db.
    */
});
```
if continue to talk about _id

while using require('mongodb');

```javascript
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);
```


Lets fetch data from mongo
mongodb-find.js

get the cursor of db.
db.collection('Todo').find();


### lets delete some data from md.
```javascript
 // delete Many
db.collection('Todos').deleteMany({name: "value"}).then((res) => {
    console.log(res);
});

CommandResult {
  result: { n: 0, ok: 1 }, // ok = 

deletedCount: 0 }

CommandResult {
  result: { n: 1, ok: 1 },

deletedCount: 1 }


// findAndDelete find -> return -> delete object. 


{ lastErrorObject: { n: 1 },
  value: { _id: 5912425580e353627639afb9, name: 'For what' },
  ok: 1 }
```

### how to update some data ###
```javascript
//db.collection('Todos').findOneAndUpdate({filter}, {update // using up operator}, {options});
 db.collection('Todos').findOneAndUpdate(
{
    // filter:
    _id: new ObjectID('pass id here');
},
{// must used update operators.
//https://docs.mongodb.com/manual/reference/operator/update/#id1
$set: { completed: true }

}

```


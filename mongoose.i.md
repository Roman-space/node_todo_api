```javascript
// setup mongoose.
require('mongoose');

//if prefer promises instead of callback ==>
mongoose.Promise = global.Promise;
mongoose.connect('url');
//take care about call things after db ready

//for mongoose we can create a schema for data
const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    }, 
    completedAt: {
        type: Number
    }
});
// then create data for this schema
let newData = new Todo({
    text: 'We use Todo as a function constructor'
});
// and just use great method 
// it returns promise
newData.save().then((res) => { }, (err) => { });
//after cretion the data for model 
// mongoose take care about lowercase and pluralize name of collection
```


How to validate data in mongoose.
http://mongoosejs.com/docs/validation.html

And we should take care about schema. == mongoose schema.
example
required: true
minlength: 1 // empty string protect.

if trim: true 
let newTodo = new Todo({ text: ' a' }); --> it returns text: 'a'

a lot of easy validations.

To build REST API = USE POSTMAN.
getpostman.com

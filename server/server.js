/*
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }, 
    completedAt: {
        type: Number,
        default: null
    }
});

// by default mongoose try convert things to string == can pass text: true / 100 + 1 (101)... 
let newTodo = new Todo({ text: 1 + 2 });

newTodo.save().then((res) => {
    console.log(res);
}, (e) => {
    console.log('Unable to save data');
});














































































































*/

const mg = require('mongoose');

mg.Promise = global.Promise;
mg.connect('mongodb://localhost:27017/TodoApp');

const userSchema = {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    name: {
        type: String,
        default: 'Anonymus',
        trim: true,
        minlength: 1
    }
};

const User = mg.model('User', userSchema);

let newUser = new User({email: 'askdf@adfj.com'});
newUser.save().then((res) => {
    console.log(res);
}, (err) => {
    console.log('unable to save', err);
});

        

    









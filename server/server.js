const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

let newTodo = new Todo({ });

newTodo.save().then((res) => {
    console.log(res);
}, (e) => {
    console.log('Unable to save data');
});

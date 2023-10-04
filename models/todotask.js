const mongoose = require('mongoose');

//make schema
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const todo = mongoose.model('todo',todoSchema);

module.exports= todo;
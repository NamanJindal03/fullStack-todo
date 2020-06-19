const mongoose = require('mongoose');

/* All the fields are required in the DB without that an entry wont be created and error will be thrown */
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,

    },
    category:{
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        required: true
    }
});

const Task= mongoose.model('Task',taskSchema);
module.exports=Task;
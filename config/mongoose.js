const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/to_do_list_app');

//require the connection to check if it is succefully connection 
const db = mongoose.connection

//error
db.on('error', console.error.bind(console, 'error connection to mongoDB'));

// up and running print message
db.once('open', function () {
    console.log('Succefully connected to database :: mongoDB');
})
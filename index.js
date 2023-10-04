const express = require('express');
const app = express();
const port = 8080;
// mongoose
const db = require('./config/mongoose');
// app.use(express.urlencoded());
const bodyParser = require('body-parser'); //for this we have to install it first 
app.use(bodyParser.urlencoded({ extended: false }));


//static file access
app.use(express.static('./assets'));

//use express router
app.use('/', require('./routes'));

//set up the views engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server,${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
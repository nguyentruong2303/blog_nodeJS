const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const router = require('./routes');
const morgan = require('morgan');


const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//template enine
app.engine('hbs',handlebars({extname: '.hbs'}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources','views'));


//http logger
app.use(morgan('combined'));


//router init
router(app);



app.listen(3000)
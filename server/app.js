const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

const routerEvents = require('./routes/events');
const routerEvent = require('./routes/event');
const routerUserviews = require('./routes/userviews');
const routerAuthLocal = require('./routes/auth/local')

const app = express();

app.set('view engine', 'pug');
app.set('views', (path.join(__dirname, '../views')));
app.use('/static', express.static( path.join(__dirname, '../client')));
app.use('/static', express.static( path.join(__dirname, '../views')));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );

app.use( flash() );


app.use('/api/events', routerEvents);
app.use('/api/event', routerEvent);

app.use('/api/users', routerUsers)
app.use('/api/user', routerUser)

app.use('/', routerUserviews)


module.exports = app;
var express = require('express');
var morgan = require('morgan');
var es6Renderer = require('express-es6-template-engine');
var session = require('express-session');
var app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(morgan('dev'));
app.use(session({
  secret: process.env.SECRET_KEY || 'dev',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 60000}
}));





app.listen(8000, function () {
    console.log('Listening on port 8000');
  });
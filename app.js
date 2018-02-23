var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var dbConnection = require('./libs/connect_db')();

var layout = require('./routes/layout');
var peoples = require('./routes/peoples');
var new_people = require('./routes/new_people');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var hbs = require('express-handlebars');

// var usersLogado = require('./configSite/config');
// var menuList = require('./mock/dadosTemp');
import { usuarioLogado } from './configSite/config';
import { menuList, peopleList} from './mock/dadosTemp';

// view engine setup
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/'
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  req.dadosTemp = {
    usuarioLogado,
    menuList,
    peopleList
  };
  next();
});

app.use('/', users);
app.use('/', layout);
app.use('/', peoples);
app.use('/', new_people);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

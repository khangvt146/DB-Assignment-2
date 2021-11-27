var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require("hbs");
var indexRouter = require('./routes/index');
const moment = require("moment");


var app = express();

// view engine setup
hbs.registerPartials(__dirname + "/views/partials");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper("NumberWithCommas", function (x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
})


hbs.registerHelper("formatDate", function (datetime) {
    var DateFormats = {
        short: "DD-MM-YYYY",
        long: "dddd DD.MM.YYYY HH:mm"
    };
    // Use UI.registerHelper..
    if (true) {
        // can use other formats like 'lll' too
        format = DateFormats['short'];
        return moment(datetime).format(format);
    }
    else {
        return datetime;
    }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
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
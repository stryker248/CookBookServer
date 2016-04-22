var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//
app.use(function (req, res, next) {
    return next();
});

require('./routes/api')(app);

app.use(function (err, req, res, next) {
    res.status(500).send('Something went wrong!');
    console.error(err.stack);
});

var server = app.listen(Number(process.env.PORT || 3000), function () {
    //var host = server.address().address;
    //var port = server.address().port;
    //console.log("Server started...");
});

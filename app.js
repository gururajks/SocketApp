var express = require('express');
var path = require('path');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8090;

app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug');
});
app.listen(port, function() {
    console.log("listening in at this port:" + port)
})
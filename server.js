var express = require('express');
var app = express();
var jobsData = require("./jobs-data.js");
require("./jobs-service.js")(jobsData,app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.render('index');
});

jobsData.connectDB('mongodb://psdev:psdev@ds063869.mongolab.com:63869/jobfinder')
.then(function() {
    console.log('connected to mongodb successfully!');
    jobsData.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);
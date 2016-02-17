var express = require('express');
var jobModel = require('./models/job');
var jobsData = require('./jobs-data.js');

var app = express();

require("./jobs-service.js")(jobsData, app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

// app.get('/api/jobs', function(req, res){
//     jobsData.findJobs().then(function(collection){
//         res.send(collection);
//     })
// });


app.get('*', function(req, res){
    res.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder');

jobsData.connectDB('mongodb://username:userpass@ds047020.mongolab.com:47020/jobfinder')
.then(function(){
    console.log('connected to mongodb successfully!');
    jobsData.seedJobs();
});


app.listen(process.env.PORT, process.env.IP);

// app.listen(8080, function(){
//     console.log("listening on port 8080");
// });

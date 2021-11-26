var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// ให้รองรับ json encoded bodies
app.use(bodyParser.json());
// สำหรับ parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// ให้รองรับ Cookie
app.use(cookieParser());
// for parsing multipart/form-data

// Cross-Origin Resource Sharing (CORS)
const cors = require('cors')

app.use(cors())

// กำหนด __basedir เป็น global และเริ่มต้นที่ path C:\xampp\htdocs\...
global.__basedir = __dirname + "/";

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  {
    console.log("Success");
    return res.status(200).send('Ok Connect!');
  };

});

//require files set path

require('./app/routes/employee_routes.routes.js')(app);

// Create a Server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Connect!", host, port)

})



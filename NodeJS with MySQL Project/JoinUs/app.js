var express = require('express');
var mysql = require("mysql");
var bodyParser = require("body-parser"); // parse request
var app = express();

// establish a connection with database
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'your database username', // your local mysql database username
  database : 'join_us' // you need to creat a database in mysql called join_us
});

// set up view enginer
app.set("view engine", "ejs");

// use body parser to parse request
app.use(bodyParser.urlencoded({extended: true}));

// set up css file directory
app.use(express.static(__dirname + "/public"));

// HOME GET route
app.get("/", function(req, res) {
  // find total users in DB
  var query = "SELECT COUNT(*) AS count FROM users";
  connection.query(query, function(error, result) {
    if (error) throw error;
    var count = result[0].count;
    res.render("home", {count: count});
  });
});

// register POST route
app.post("/register", function(req, res) {
  var person = { email: req.body.email };
  connection.query("INSERT INTO users SET ?", person, function(err, result) {
    if (err) throw err;
    res.redirect("home");
  });
});

// start the server
app.listen(8080, function() {
  console.log("App listening on port 8080!");
});
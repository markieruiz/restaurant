
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// variables:
var tables = [];
var waitlist = [];
// $('#reserve_name').val("");
// $('#reserve_phone').val("");
// $('#reserve_email').val("");
// $('#reserve_uniqueID').val("");


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// show APIs

// Displays all reservations TABLES
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  // Displays all waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  //--------------------------------------

app.post("/api/reserve", function(req, res) {

  var newReservation = req.body;

  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reserve.push(newReservation);

  res.json(newReservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
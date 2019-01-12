
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// variables:
var reservations = [];
// $('#reserve_name').val("");
// $('#reserve_phone').val("");
// $('#reserve_email').val("");
// $('#reserve_uniqueID').val("");
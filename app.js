
/*

 ----------------------
 Author:         Shubham chaturvedi
 Created Date:   03/09/2015
 Purpose:        Angular fram work with express and route

 */
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname));

// app.use(bodyParser.json());


  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

/**
* A Docvy App plugin for converting latex documents to html
*
* The MIT License (MIT)
* Copyright (c) 2015 GochoMugo <mugo@forfuture.co.ke>
*/


"use strict";


// built-in modules
var fs = require("fs");


exports.accepts = function() {
  return ["tex", "latex"];
};


exports.produces = function() {
  return ["html"];
};


exports.run = function(rawData, expects, callback) {
  if (expects[0] === "html") {
    fs.readFile(__dirname + "/www/index.html", {
      encoding: "utf8"
    }, function(err, data) {
      if (err) { return callback(err); }
      return callback(null, "html", rawData.replace(/\{LATEX}\/g, data));
    })
  }
  return callback(new Error());
};


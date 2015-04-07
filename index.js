"use strict";


var fs = require("fs");


exports.accepts = function() {
  return ["tex", "latex"];
};


exports.produces = function() {
  return ["html"];
}


exports.run = function(rawData, expects, callback) {
  if (expects[0] === "html") {
    fs.readFile(__dirname + "/www/index.html", {
      encoding: "utf8"
    }, function(err, data) {
      if (err) { return callback(err); }
      return callback(null, "html", data.replace(/{LATEX}/g, rawData));
    })
  }
  return callback(new Error());
};

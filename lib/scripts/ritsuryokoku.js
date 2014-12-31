// Description
//   A Hubot script to respond a ritsuryokoku
//
// Configuration:
//   None
//
// Commands:
//   hubot ritsuryokoku - respond a ritsuryokoku
//
// Author:
//   bouzuya <m@bouzuya.net>
//
var Fs, Path;

Fs = require('fs');

Path = require('path');

module.exports = function(robot) {
  var jsonFile, list;
  jsonFile = Path.resolve(__dirname, '../ritsuryokoku.json');
  list = JSON.parse(Fs.readFileSync(jsonFile, {
    encoding: 'utf-8'
  }));
  return robot.respond(/ritsuryokoku$/i, function(res) {
    var item;
    item = res.random(list);
    return res.send("" + item.name + " (" + item.roma + ")");
  });
};

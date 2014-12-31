# Description
#   A Hubot script to respond a ritsuryokoku
#
# Configuration:
#   None
#
# Commands:
#   hubot ritsuryokoku - respond a ritsuryokoku
#
# Author:
#   bouzuya <m@bouzuya.net>
#

Fs = require 'fs'
Path = require 'path'

module.exports = (robot) ->
  jsonFile = Path.resolve(__dirname, '../ritsuryokoku.json')
  list = JSON.parse Fs.readFileSync(jsonFile, encoding: 'utf-8')

  robot.respond /ritsuryokoku$/i, (res) ->
    item = res.random list
    res.send "#{item.name} (#{item.roma})"

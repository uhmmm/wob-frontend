var Airtable = require('airtable')
var fs = require('fs')
var util = require('util')

var APIKEY = process.env.AIRTABLE_KEY
var base = new Airtable({ apiKey: APIKEY }).base('appe4s599Wi0qoxtJ')

let routes = []
base('routes')
  .select()
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        routes.push(record)
      })

      fetchNextPage()
    },
    function done(err) {
      console.log(
        util.inspect(routes[0], {
          showHidden: false,
          depth: null,
          colors: true
        })
      )
      if (err) {
        console.error(err)
        return
      }
    }
  )

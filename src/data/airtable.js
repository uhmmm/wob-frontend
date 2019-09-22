var Airtable = require('airtable')
var fs = require('fs')

var APIKEY = process.env.AIRTABLE_KEY
var base = new Airtable({ apiKey: APIKEY }).base('appe4s599Wi0qoxtJ')

let content = []
base('contents')
  .select()
  .eachPage(
    (records, fetchNextPage) => {
      records.forEach(function(record) {
        content.push(record.fields)
      })
      fetchNextPage()
    },
    err => {
      fs.writeFileSync(
        './src/data/contents.json',
        JSON.stringify(content, null, 2),
        'utf-8'
      )
      if (err) {
        console.error(err)
        return
      }
    }
  )

let routes = []
base('routes')
  .select()
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        routes.push(record.fields)
      })

      fetchNextPage()
    },
    function done(err) {
      fs.writeFileSync(
        './src/data/routes.json',
        JSON.stringify(routes, null, 2),
        'utf-8'
      )
      if (err) {
        console.error(err)
        return
      }
    }
  )

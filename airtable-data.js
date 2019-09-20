var Airtable = require('airtable')
var fs = require('fs')

var APIKEY = process.env.AIRTABLE_KEY
var base = new Airtable({ apiKey: APIKEY }).base('appe4s599Wi0qoxtJ')

let infoAsides = []

base('infoAsides')
  .select({
    view: 'Table'
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        infoAsides.push(record.fields)
      })

      fetchNextPage()
    },
    function done(err) {
      fs.writeFileSync(
        './data.json',
        JSON.stringify(infoAsides, null, 2),
        'utf-8'
      )
      if (err) {
        console.error(err)
        return
      }
    }
  )

var Airtable = require('airtable')
var fs = require('fs')

var APIKEY = process.env.AIRTABLE_KEY
var base = new Airtable({ apiKey: APIKEY }).base('appe4s599Wi0qoxtJ')

let elements = []
base('elements')
  .select()
  .eachPage(
    (records, fetchNextPage) => {
      records.forEach(function(record) {
        elements.push(record.fields)
      })
      fetchNextPage()
    },
    err => {
      fs.writeFileSync(
        './src/data/elements.json',
        JSON.stringify(elements, null, 2),
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

let images = []
base('images')
  .select()
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        images.push(record.fields)
      })

      fetchNextPage()
    },
    function done(err) {
      fs.writeFileSync(
        './src/data/images.json',
        JSON.stringify(images, null, 2),
        'utf-8'
      )
      if (err) {
        console.error(err)
        return
      }
    }
  )

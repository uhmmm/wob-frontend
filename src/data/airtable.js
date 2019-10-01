var Airtable = require('airtable')
var fs = require('fs')

var APIKEY = process.env.AIRTABLE_KEY
var base = new Airtable({ apiKey: APIKEY }).base('appe4s599Wi0qoxtJ')

const fetchAirTable = type => {
  let temp = []
  base(type)
    .select()
    .eachPage(
      (records, fetchNextPage) => {
        records.forEach(function(record) {
          temp.push(record.fields)
        })
        fetchNextPage()
      },
      err => {
        fs.writeFileSync(
          `./src/data/${type}.json`,
          JSON.stringify(temp, null, 2),
          'utf-8'
        )
        if (err) {
          console.error(err)
          return
        }
      }
    )
}

fetchAirTable('elements')
fetchAirTable('routes')
fetchAirTable('images')
fetchAirTable('letter')
fetchAirTable('variables')

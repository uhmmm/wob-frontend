var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appe4s599Wi0qoxtJ');

base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('asideId'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
OUTPUT
Retrieved 1
 Retrieved 2
 Retrieved 3
FETCH FIRST PAGE
// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('Table 1').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('asideId'));
    });
});
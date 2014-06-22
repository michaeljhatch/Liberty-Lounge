var GoogleSpreadsheet = require("google-spreadsheet");

var my_sheet = new GoogleSpreadsheet('1789700692');

// without auth -- read only
// # is worksheet id - IDs start at 1
my_sheet.getRows( 1, function(err, row_data){
    console.log( 'pulled in '+row_data.length + ' rows ')
})
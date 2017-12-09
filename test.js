const papa = require('papaparse');
const fs = require('fs');

let data = {
  close: [],
};


papa.parse(fs.createReadStream('./data/EURUSD.txt', 'utf8'), {
  dynamicTyping: true,
  header: true,
  complete: function(results){
    console.log(results)
  }
})
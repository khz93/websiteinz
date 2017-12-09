var express = require('express');
var router = express.Router();
var papa = require('papaparse');
var fs = require('fs');
var path = require('path')



router.get('/', function(req, res, next) {
  let query = req.query.slice;
  papa.parse(fs.createReadStream(path.join(__dirname, '../data/EURUSD.txt'), 'utf8'), {
    header: true,
    complete: function(results){
      res.json(results.data.slice(-(query)))
      // res.json(results.data.slice(query))
    }
  });
});

module.exports = router;
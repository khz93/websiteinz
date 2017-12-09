var express = require('express');
var router  = express.Router();
var tulind  = require('tulind');
var math    = require('mathjs');
var papa    = require('papaparse');

/**
 * Returns number of indexes cut by indicators
 * 
 * @param {array} data 
 * @returns {number}
 */
function checkCut(data) {
  let cutChecker = {
    'DI': function (period) {
      return tulind.indicators.di.start([period])
    },
    'RSI': function (period) {
      return tulind.indicators.rsi.start([period])
    },
    'CCI': function (period) {
      return tulind.indicators.cci.start([period])
    },
  }
  let cut = 0;
  for (i of data) {
    let indicator = Object.keys(i)[0];
    let check     = cutChecker[indicator](parseInt(i[indicator]));
    if (cut < check) {
      cut = check;
    }
  }
  return cut;
}





/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', {
    title: 'Express'
  });
});

router.post('/', function (req, res, next) {
  let parsedIndicators = JSON.parse(req.body.table);
  let cut = checkCut(parsedIndicators);

})

module.exports = router;
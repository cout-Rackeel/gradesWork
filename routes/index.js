var express = require('express');
var router = express.Router();
var conn = require('../lib/db');

router.get('/' , (req,res,next) => {
  selectSQL = "SELECT lg.letter , lg.description , ls.meaning" +
  " FROM grades.letter_grades lg , grades.letter_sym_meanings ls" +
  " WHERE lg.meaning_id = ls.id" +
  " ORDER BY lg.id"

  conn.query(selectSQL , (err,rows) => {
    if(err) throw err;
    var locals = {
      title:'GradesWeb - Home page',
      data : rows
    }
    res.render('index', locals);
  })
  
})


module.exports = router;
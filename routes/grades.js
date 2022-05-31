var express = require('express');
var router = express.Router();
var conn = require('../lib/db');

router.get('/' , (req,res,next) => {
  var average ;

  conn.query('SELECT AVG(gr.grade) AS avg FROM grades.grades gr' , (err,avg) => {
    var avg1 = avg;
    console.log(avg);
    var gradeSQL = "SELECT s.f_name , s.l_name , s.class ,  sb.subject , t.term , gr.grade , lt.letter" +
  " FROM grades.students s , grades.subjects sb , grades.terms t , grades.grades gr , grades.letter_grades lt" +
  " WHERE gr.stu_id = s.id AND gr.sub_id = sb.id AND gr.term_id = t.id AND gr.letter_id = lt.id;"

  conn.query( gradeSQL , (err,rows) => {
    if (err) throw err 
    var locals = {
      title : 'GradesWeb -  Grades List Page',
      grades : rows,
    }
    res.render('grades/grades',locals);
  })
})
    
  })


  

router.post('/' , (req,res,next) => {

  var gradeSQL = "SELECT s.f_name , s.l_name , s.class ,  sb.subject , t.term , gr.grade , lt.letter" +
  " FROM grades.students s , grades.subjects sb , grades.terms t , grades.grades gr , grades.letter_grades lt" +
  " WHERE gr.stu_id = s.id AND gr.sub_id = sb.id AND gr.term_id = t.id AND gr.letter_id = lt.id" +
  " AND sb.subject LIKE '"+ req.body.subject +"%'"

  conn.query(gradeSQL , (err,rows) => {
    if (err) throw err
    var locals = {
      title : 'GradesWeb -  Grades List Page',
      grades : rows
    }
    res.render('grades/grades',locals);
  })
})


module.exports = router;
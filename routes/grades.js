var express = require('express');
var router = express.Router();
var conn = require('../lib/db');

router.get('/' , (req,res,next) => {

    var gradeSQL = "SELECT gr.sub_id ,  gr.stu_id , s.f_name , s.l_name , s.class ,  sb.subject , t.term , gr.grade , lt.letter" +
  " FROM grades.students s , grades.subjects sb , grades.terms t , grades.grades gr , grades.letter_grades lt" +
  " WHERE gr.stu_id = s.id AND gr.sub_id = sb.id  AND gr.sub_id = 1 AND gr.term_id = t.id AND gr.letter_id = lt.id;"

  conn.query( gradeSQL , (err,rows) => {
    if (err) throw err 
    var locals = {
      title : 'GradesWeb -  Grades List Page',
      grades : rows,
      sub : req.body.subject
    }
    res.render('grades/grades',locals);
  })
})
    

router.post('/' , (req,res,next) => {

  var gradeSQL = "SELECT gr.sub_id , gr.stu_id , s.f_name , s.l_name , s.class ,  sb.subject , t.term , gr.grade , lt.letter" +
  " FROM grades.students s , grades.subjects sb , grades.terms t , grades.grades gr , grades.letter_grades lt" +
  " WHERE gr.stu_id = s.id AND gr.sub_id = sb.id AND gr.term_id = t.id AND gr.letter_id = lt.id" +
  " AND sb.id LIKE " + req.body.subject

  conn.query(gradeSQL , (err,rows) => {
    if (err) throw err
    var locals = {
      title : 'GradesWeb -  Grades List Page',
      grades : rows,
      sub : req.body.subject
    }
    res.render('grades/grades',locals);
  })
})

router.get('/show-avg/:id/:sub' , (req,res,next) => {

  avgSQL = "SELECT gr.stu_id , s.f_name , s.l_name , s.class ,  sb.subject , AVG(gr.grade) AS avg , lt.letter" +
  " FROM grades.students s , grades.subjects sb , grades.terms t , grades.grades gr , grades.letter_grades lt" +
  " WHERE gr.stu_id = s.id AND gr.sub_id = sb.id  AND gr.term_id = t.id AND gr.letter_id = lt.id" +
  " AND gr.sub_id LIKE " + req.params.sub +
  " AND  gr.stu_id LIKE " + req.params.id;

  conn.query(avgSQL , (err,rows) => {
    if(err) throw err;
    var locals = {
      title : 'GradesWeb - Average List Page',
      data : rows
    }
    res.render('grades/show-avg' , locals)
  })

})


module.exports = router;
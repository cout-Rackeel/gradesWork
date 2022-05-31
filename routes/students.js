var express = require('express');
var router = express.Router();
var conn = require('../lib/db');
var letterGen = require('../public/javascripts/helper.js')


router.get('/' , (req,res,next) => {
  conn.query('SELECT * FROM students' , (err,rows) => {
    if (err) throw err
    var locals = {
      title : 'GradesWeb - Students List Page',
      students : rows
    }
    res.render('students/students-list',locals);
  })
})

router.post('/add' , (req, res , next) => {
  var data = { f_name : req.body.fname , l_name : req.body.lname , class: req.body.class }
  var addSQL = "INSERT INTO students SET ?"
  conn.query( addSQL , data , (err,rows) => {
    if(err) console.log(err);
    res.redirect('/students')
  })
});

router.get('/add-grade/:id' , (req,res,next) => {
  var locals = {
    title : 'GradesWeb - Add Grades Page',
    studentID : req.params.id
  }
  res.render('grades/add-grades',locals);
})

router.post('/addGrade' , (req, res , next) => {
  var data = { stu_id : req.body.student , sub_id : req.body.subject , term_id : req.body.term , grade : req.body.grade , letter_id : letterGen(parseFloat(req.body.grade))}
  var addSQL = "INSERT INTO grades SET ?"
  conn.query( addSQL , data , (err,rows) => {
    if(err) console.log(err);
    console.log('Grade successfully added')
    res.redirect('/students/add-grade/' + req.body.student)
  })
});



console.log();








module.exports = router;
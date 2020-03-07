const express = require('express');
const router = express.Router();

const Student = require('../models/student');

// GET http://localhost:3000/students
router.get('/', async (req, res) => {
  const students = await Student.getAll();

  res.render('students/index', { students: students })
});

// GET http://localhost:3000/students/create
router.get('/create', (req, res) => {
  res.render('students/formNew')
});

// POST http://localhost:3000/students/create
router.post('/create', async (req, res) => {
  const response = await Student.create({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    edad: req.body.edad,
    email: req.body.email,
    matricula: req.body.nMatricula
  });
  res.redirect('/students')
});

// GET http://localhost:3000/students/delete/:studentId
router.get('/delete/:studentId', (req, res) => {
  Student.deleteById(req.params.studentId).then(result => {
    res.redirect('/students');
  }).catch(err => {
    console.log(err);
  });
});

// GET http://localhost:3000/students/:studentId
router.get('/:studentId', (req, res) => {
  Student.getById(req.params.studentId)
    .then(student => {
      Student.getSede(student.fk_sedes).then(sede => {
        student.fk_sedes = sede;
        res.render('students/detail', { student: student });
      })
    })
    .catch(err => {
      console.log(err);
    });
});


module.exports = router;

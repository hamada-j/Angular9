const router = require('express').Router();

const Student = require('../../models/student');

// GET http://localhost:3000/api/students
router.get('/', async (req, res) => {
    const rows = await Student.getAll();
    res.json(rows);
});

// GET http://localhost:3000/api/students/:studentId
router.get('/:studentId', async (req, res) => {
    const student = await Student.getById(req.params.studentId);
    res.json(student[0]);
});

// PATCH http://localhost:3000/api/students/:studentId
router.patch('/:studentId', async (req, res) => {
    const student = await Student.editField(req.params.studentId, req.body);
    console.log(student);
    res.json(student);
})

router.delete('/', async (req, res) => {
    const result = await Student.deleteById(req.body.studentId);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'El alumno se ha borrado con éxito' });
    } else {
        res.json({ error: 'Error al borrar alumno' })
    }
})

// POST http://localhost:3000/api/students
router.post('/', async (req, res) => {
    const result = await Student.create(req.body);
    if (result['affectedRows'] === 1) {
        const student = await Student.getById(result.insertId);
        res.json(student);
    } else {
        res.json({ error: 'Error al insertar el alumno' });
    }
});


module.exports = router;
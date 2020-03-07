const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/user');

router.post('/register', [
    /* username, email, password hacen referencia a las keys del objeto req.body */
    check('username', 'El nombre de usuario debe estar entre 3 y 15 caracteres').isLength({ min: 3, max: 15 }).isAlphanumeric(),
    check('email', 'El email debe estar bien puesto cohone').isEmail(),
    check('password', 'La password debe ser alfanumerica y entre 4 y 8 caracteres').custom((value) => {
        return /^(?=.*\d).{4,8}$/.test(value);
    })
], async (req, res) => {
    // Este metodo devuelve si hay errores o no en los middlewares de antes
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // res.json() por defecto devuelve el status 200
        // Si queremos enviar otro status hay que indicarlo con res.status(422).json()
        return res.status(422).json(errors.array());
    }

    const passwordEnc = bcrypt.hashSync(req.body.password, 10);
    req.body.password = passwordEnc;
    const result = await User.create(req.body);
    res.json(result);
});

router.post('/login', (req, res) => {

});

module.exports = router;
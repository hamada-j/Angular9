const getAll = () => {
    // return new Promise((resolve, reject) => {
    //     db.query('SELECT * FROM alumnos', (err, rows) => {
    //         if (err) reject(err);
    //         resolve(rows);
    //     });
    // });
    return executeQuery('SELECT * FROM alumnos', null);
};

const getById = studentId => {
    // return new Promise((resolve, reject) => {
    //     db.query('SELECT * FROM alumnos WHERE id = ?', [studentId], (err, rows) => {
    //         if (err) reject(err);
    //         if (rows.length === 0) {
    //             resolve(null);
    //         }
    //         resolve(rows[0]);
    //     });
    // });
    return executeQuery('SELECT * FROM alumnos WHERE id = ?', studentId);
};

const getSede = fkSede => {
    // return new Promise((resolve, reject) => {
    //     db.query('SELECT * FROM sedes WHERE id = ?', [fkSede], (err, rows) => {
    //         if (err) reject(err)
    //         resolve(rows[0]);
    //     })
    // })
    return executeQuery('SELECT * FROM sedes WHERE id = ?', fkSede)
}

const create = ({ nombre, apellidos, edad, email, matricula }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO alumnos (nombre, apellidos, email, edad, fecha_matricula, matricula) VALUES (?, ?, ?, ?, ?, ?)', [nombre, apellidos, email, edad, new Date(), matricula], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const deleteById = (studentId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM alumnos WHERE id = ?', [studentId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const editField = (studentId, body) => {
    console.log(body);
    return new Promise((resolve, reject) => {
        db.query('UPDATE alumnos SET ? = ? WHERE id = ?', [body.campo, body.valor, parseInt(studentId)], (err, student) => {
            if (err) reject(err);
            resolve(student);
        })
    })
}

const executeQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, [params], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    getAll: getAll,
    getById: getById,
    getSede: getSede,
    create: create,
    deleteById: deleteById,
    editField: editField
}
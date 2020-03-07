const create = ({ username, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    create: create
}
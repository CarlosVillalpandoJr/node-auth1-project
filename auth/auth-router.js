const router = require('express').Router();
const Users = require('../users/user-model');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
    let user = req.body

    user.password = bcrypt.hashSync(user.password, 10); 

    Users.add(user)
        .then(savedUser => {
            res.status(201).json({ message: "user register", savedUser})
        })
        .catch(error => res.send(error))
})




module.exports = router;
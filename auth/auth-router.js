const router = require('express').Router();
const Users = require('../users/user-model');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
    let user = req.body

    user.password = bcrypt.hashSync(user.password, 10); 

    Users.add(user)
        .then(savedUser => {
            // create a session (store in our DB)
            // send back a cookie that corresponds to the session
            res.status(201).json({ message: "user register", savedUser})
        })
        .catch(error => res.send(error))
})

router.post('/login', (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            // create a session (store in our DB)
            // send back a cookie that corresponds to the session
            if(user && bcrypt.compareSync(password, user.password)) { // real pass first, database hash second
                console.log('db password', user.password)
                console.log('login password', password)
                res.status(200).json({ message: `Welcome ${user.username}` })
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})  




module.exports = router; 




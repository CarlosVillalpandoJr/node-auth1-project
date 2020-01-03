const router = require('express').Router()
const Users = require('./user-model.js')
const bcrypt = require('bcryptjs');

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})

function restricted(req, res, next) {
// as long as someone has a username and password that is validated, should have access    

// grab a cookie 

// make sure it is valid

    if (req.session && req.session.user) {
    next();
    } else {
    res.status(401).json({ message: 'Invalid Credentials' });
    }
} 

module.exports = router;

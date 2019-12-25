const router = require('express').Router()
const Users = require('./user-model.js')

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})





module.exports = router;

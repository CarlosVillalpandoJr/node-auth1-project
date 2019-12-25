const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const userRouter = require('../users/user-router');

router.use('/users', userRouter)

router.get('/', (req, res) => {
    res.json({ api: "Api router running" })
})

module.exports = router;

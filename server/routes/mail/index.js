const express = require('express')
const router = express.Router()

const passport = require('../_passport')

const mailer = require('./handlers/mailer')

// all these routes require JWT token
router.use( passport.authenticate('jwt', { session: false }) )

router.post('/', mailer)

module.exports = router

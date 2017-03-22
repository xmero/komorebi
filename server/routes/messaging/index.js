const express = require('express')
const router = express.Router()

const passport = require('../_passport')

const getMessages = require('./handlers/getMessages')
const getSentMessages = require('./handlers/getSentMessages')
const getMessageDetails = require('./handlers/getMessageDetails')
const newMessage = require('./handlers/newMessage')
const updateMessage = require('./handlers/updateMessage')
const deleteMessage = require('./handlers/deleteMessage')

// all these routes require JWT token
router.use( passport.authenticate('jwt', { session: false }) )

router.get('/:id', getMessages)
router.get('/sent/:id', getSentMessages)
router.post('/', newMessage)
router.get('/details/:id',getMessageDetails)
router.put('/update/:id', updateMessage)
router.post('/:id', deleteMessage)

module.exports = router

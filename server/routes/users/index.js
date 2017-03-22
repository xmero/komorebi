const express = require('express')
const router = express.Router()


const getAll = require('./handlers/getAll')
const getUser = require('./handlers/getUser')
const review = require('./handlers/review')


router.get('/', getAll)
router.get('/:id', getUser)
router.post('/review', review)

module.exports = router






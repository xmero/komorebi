const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addProduct = require('./handlers/addProduct')
const getDetails = require('./handlers/getDetails')
const getByUser = require('./handlers/getByUser')
const deleteProduct = require('./handlers/deleteProduct')

router.get('/', getAll)
router.post('/', addProduct)
router.get('/:id', getDetails)
router.get('/:id', getDetails)
router.get("/myitems/:id", getByUser)
router.get("/delete/:id", deleteProduct)

module.exports = router

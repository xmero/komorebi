const express = require('express');
const router = express.Router();

const passport = require('../_passport')

const editUser = require('./handlers/editUser')
const deleteUser = require('./handlers/deleteUser')
const editProduct = require('./handlers/editProduct')


// all these routes require JWT token
router.use( passport.authenticate('jwt', { session: false }) )

router.put("/edit/:id", editUser );
router.post("/remove/:id", deleteUser );
router.put("/editproduct/:id", editProduct)

module.exports = router;  
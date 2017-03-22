const express = require('express')
const multer = require('multer')
const path = require('path')

const uploadFolderPath = path.join(global.__base, process.env.UPLOAD_FOLDER)
const uploadCloudinary = require('./handlers/uploadCloudinary')

const Router = express.Router()

const upload = multer({
  dest: uploadFolderPath
})

Router
  .use( express.static(path.join(__dirname, '../public')))
  .post('/', upload.single('file'), uploadCloudinary, (req, res) => {
    const { imageLink } = req
    res.status(200).json({ imageLink })
  })
  

module.exports = Router
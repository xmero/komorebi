const cloudinary = require('cloudinary')
const del = require('del')
const path = require('path')

const uploadFolderPath = path.join( __base, process.env.UPLOAD_FOLDER )

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

function uploadCloudinary(req, res, next) {
  if(req.file) {
    cloudinary.uploader.upload(req.file.path, ({ secure_url }) => {
      if (secure_url) {
        req.imageLink = secure_url
        // delete files inside folder but not the folder itself
        del.sync([`${uploadFolderPath}/**`, `!${uploadFolderPath}`]);
        next();
      }
      else {
        res.status(404).send("Oh uh, something went wrong");
      }
    })
  } else {
    next();
  }
}

module.exports = uploadCloudinary
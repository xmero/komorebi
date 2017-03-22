const cloudinary = require('cloudinary')

const uploadFolderPath = path.join( __base, process.env.UPLOAD_FOLDER )

function profileImage(image) {
    cloudinary.image(image, {transformation: [
  {width: 400, height: 400, gravity: "face", radius: "max", crop: "crop"},
  {width: 200, crop: "scale"}
  ]})

module.exports = profileImage


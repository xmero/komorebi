const User = require(__base+'models/User')

module.exports = (req,res) => {

  const id = req.params.id
  const { username, email, location, description, image } = req.body
  const updatedAt = Date.now()

  let properties = { username, email, location, description }

  if (image){
    properties = { username, email, location, description, image }
  }

  User.findByIdAndUpdate  ( id,  properties )
    .then( user => {
      console.log('User has been updated succesfully')
      res.json(user) 
    })
    .catch( err => res.status(500).json(err) )

}


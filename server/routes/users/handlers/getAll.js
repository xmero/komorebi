const User = require(__base+'models/User')

module.exports = (req,res) => {

  User.find()
    .then( users => res.json(users) )
    .catch( err => { throw err } )

}




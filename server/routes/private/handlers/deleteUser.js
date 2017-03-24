const User = require(__base+'models/User')
const Product = require(__base+'models/Product')

module.exports = (req,res) => {

  const id = req.params.id

Product.remove( { owner: id }, ()=>{

  User.findByIdAndRemove  ( id )
    .then( user => {
      console.log('User has been removed succesfully')
      res.redirect("/") 
    })
    .catch( err => res.status(500).json(err) )

})
}


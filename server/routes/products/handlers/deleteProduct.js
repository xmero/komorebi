const Product = require(__base+'models/Product')
module.exports = (req,res) => {

  const id = req.params.id


  Product.findByIdAndRemove  ( id )
    .then( product => {
      console.log('Product has been removed succesfully')
      res.redirect("/") 
    })
    .catch( err => res.status(500).json(err) )
}


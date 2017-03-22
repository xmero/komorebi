const Product = require(__base+'models/Product')

module.exports = (req,res) => {

  const id = req.params.id
  let { name, location, description, image, free, postalCode } = req.body
  const updatedAt = Date.now()

  let properties = { name, location, description, free, postalCode }

  if (image){
    properties = { name, location, description, free, postalCode, image }
  }

  Product.findByIdAndUpdate  ( id,  properties )
    .then( product => {
      console.log('Product has been updated succesfully')
      res.json(product) 
    })
    .catch( err => res.status(500).json(err) )

}


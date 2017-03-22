  const Product = require(__base+'models/Product')
    const User = require(__base+'models/User')

module.exports = (req,res) => {

  const id = req.params.id

  Product.findById(id, function(err, product) {
        User.populate(product, {path: "owner"},function(err, product){
            res.json(product);
        })
        })
}
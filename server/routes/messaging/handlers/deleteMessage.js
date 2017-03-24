const Message = require(__base+'models/Message')

module.exports = (req,res) => {

  const id = req.params.id

  Message.findByIdAndRemove  ( id )
    .then( message => {
      console.log('Message has been removed succesfully')
      res.redirect("/") 
    })
    .catch( err => res.status(500).json(err) )
}


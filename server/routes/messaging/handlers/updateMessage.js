const Message = require(__base+'models/Message')

module.exports = (req,res) => {

  const id = req.params.id
  const readedAt = Date.now()
  let { status } = req.body
  
  Message.findByIdAndUpdate  ( id,  {status, readedAt } )
    .then( message => {
      console.log('Message has been updated succesfully')
      res.json(message) 
    })
    .catch( err => res.status(500).json(err) )

}


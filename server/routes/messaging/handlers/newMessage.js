const Message = require(__base+'models/Message')
const mongoose = require('mongoose')

module.exports = (req,res) => {

  const { streamId, association, sender, recipient, subject, body ,product ,from, to } = req.body
  const message = new Message( {streamId, association, sender, recipient, subject, body ,product ,from, to } )

  message.save()
    .then( () => res.redirect("/") )
    .catch( err => { throw err })

}
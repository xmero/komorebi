const Message = require(__base+'models/Message')


module.exports = (req,res) => {

    const id = req.params.id

    Message.findById( id , function(err, message) {
            res.json(message);
        })
}
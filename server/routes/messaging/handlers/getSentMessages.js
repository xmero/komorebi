const Message = require(__base+'models/Message')

module.exports = (req,res) => {

    const userId = req.params.id

    Message.find({"sender": userId} , function(err, message) {
            res.json(message);
        })
}
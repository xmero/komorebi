const Message = require(__base+'models/Message')


module.exports = (req,res) => {

    const userId = req.params.id

    Message.find({"recipient": userId} , function(err, message) {
            res.json(message);
        })
}
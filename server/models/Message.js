const mongoose = require('mongoose')
var Schema = mongoose.Schema
const collection = 'messages'

const MessageSchema = new Schema({
streamId: { type: String },
association: { type: String },
product: { type: String },
sender: { type: String },
from: { type: String },
to: { type: String },
recipient: { type: String },
timestamp: { type: Number, default: Date.now },
subject : { type: String },
body: { type: String },
status: { type: String, enum: ['not', 'read'], default: 'not' },
readAt: { type: Number }
}, { collection })

module.exports = mongoose.model('Message', MessageSchema);
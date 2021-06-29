const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const whatsAppSchema = new Schema({
    message: {
        type: String
    },
    author: {
        type: String
    },
    room: {
        type: String
    },
    timestamp: {
        type : String
    }

});
module.exports = mongoose.model('messages',whatsAppSchema)
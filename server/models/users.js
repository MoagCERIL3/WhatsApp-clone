const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const usersSchema = new Schema({
    userId: {
        type: String
    },
    userDisplayName:{
        type : String
    },
    userEmail:{
        type:String
    },
    userStatus:{
        type: Boolean
    }


});
module.exports = mongoose.model('users',usersSchema)
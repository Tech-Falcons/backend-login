const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type: String
    },
    
    email:{
        type:String 
    },
    Password:{
        type:String
    }

})

const UserModel = mongoose.model('UserModel' , userSchema);
module.exports = UserModel;
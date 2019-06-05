const mongoose=require('mongoose');
const userSchema= mongoose.Schema({
    
    username: {type: String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    cpassword: {type:String, required:true},
    name: {type:String, required:true},
    usertype: {type:String, required:true}

});

module.exports= mongoose.model('User',userSchema);
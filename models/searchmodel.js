const mongoose=require('mongoose');
const searchSchema= mongoose.Schema({
    
    username: {type: String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    cpassword: {type:String, required:true},
    age: {type:Number, required:true},
    gender: {type:String, required:true},
    name: {type:String, required:true}
});

module.exports= mongoose.model('Search',searchSchema);
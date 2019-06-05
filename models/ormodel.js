const mongoose= require('mongoose');
const orSchema= mongoose.Schema({
    
    cf: {type: String, required:true},
    funame:{type:String, required:true},
    rname:{type:String, required:true}

});

module.exports= mongoose.model('Or',orSchema);
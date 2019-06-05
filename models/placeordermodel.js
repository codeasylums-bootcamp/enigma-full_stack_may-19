const mongoose= require('mongoose');
const placeorderSchema= mongoose.Schema({
    
    username: {type: String, required:true},
    order : {type:Array,required:true},
    address: {type:String,required: true},
    phone:{type:Number,required:true},
    fname:{type:String,required:true}
    

});

module.exports= mongoose.model('Placeorder',placeorderSchema);
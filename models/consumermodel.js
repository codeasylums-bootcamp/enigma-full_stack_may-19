const mongoose=require('mongoose');
const consumerSchema= mongoose.Schema({
    
    menu: {type: Array, required:true},
    
    
  

});

module.exports= mongoose.model('Consumer',consumerSchema);
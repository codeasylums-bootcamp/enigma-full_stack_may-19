const mongoose=require('mongoose');
const retailerSchema= mongoose.Schema({
    
    menu: {type: Array, required:true},
    username: {type: String, required:true}
    
  

});

module.exports= mongoose.model('Retailer',retailerSchema);
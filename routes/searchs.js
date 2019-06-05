const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const searchmodel=require('../models/searchmodel');

router.get('/',function(req,res){
    console.log("yes")
    
    
    
    searchmodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})



           module.exports=router;
const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const consumermodel=require('../models/consumermodel');

router.get('/',function(req,res){
    
    consumermodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})



module.exports=router;
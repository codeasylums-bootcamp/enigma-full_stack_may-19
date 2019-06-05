const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const retailermodel=require('../models/retailermodel');

router.post('/',function(req,res){
    console.log(req.body);
   // res.json(req.body).status(200);
   const newretailer=new retailermodel({
        //_id: new mongoose.Types.ObjectId(),
        menu: req.body.menu,
         username: req.body.username
   });
   newretailer.save();
           res.send("Account created").status(201);

   
})
router.get('/',function(req,res){
    
    retailermodel.find()
    
    .exec()
    .then(product=>{
        console.log('yes');
        res.json(product).status(200);
    })})
    
    
    

           module.exports=router;


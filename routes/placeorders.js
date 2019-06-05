const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const placeordermodel=require('../models/placeordermodel');

router.get('/',function(req,res){
    
    placeordermodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})

router.post('/',function(req,res){
    console.log(req.body);
   // res.json(req.body).status(200);
   const newuser=new placeordermodel({
        //_id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        address : req.body.address,
        phone : req.body.phone,
        order: req.body.order,
        fname: req.body.fname

   });
   newuser.save();
           res.send("Account created").status(201);})

   router.delete('/:orderID',function(req,res){
       var id=req.params.orderID;
       placeordermodel.deleteOne({_id:id})

       .exec()
       .then(res=>{
           console.log(res)
       })
   })



module.exports=router;
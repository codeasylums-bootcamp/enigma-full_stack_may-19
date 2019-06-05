const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const ormodel=require('../models/ormodel');

router.get('/',function(req,res){
    
    ormodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})

router.post('/',function(req,res){
    console.log(req.body);
   // res.json(req.body).status(200);
   const newor=new ormodel({
        //_id: new mongoose.Types.ObjectId(),
        cf: req.body.cf,
        funame: req.body.funame,
        rname:req.body.rname
        

   });
   newor.save();})

   router.delete('/:orderID',function(req,res){
    var id=req.params.orderID;
    console.log('yahan pahuch gye')
    ormodel.deleteOne({_id:id})

    .exec()
    .then(res=>{
        console.log(res)
    })
})

           

module.exports=router;

const express=require('express');
const morgan=require('morgan');
const parser= require('body-parser');
const mongoose=require('mongoose');
const app=express();
const port=3001;

mongoose.connect("mongodb+srv://utkarshkoushik00:ut6060007@uk007-4lmzk.mongodb.net/test?retryWrites=true&w=majority",function(err){
    if(err){
        console.log("error");
    }
    else {
        console.log('Atlas connected')
    }
});

const users=require('./routes/user');
const retailers=require('./routes/retailers');
const consumers = require('./routes/user');
const placeorders = require('./routes/placeorders');
const ors = require('./routes/ors');

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({entended:true}));
app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    res.set('Access-Control-Allow-Methods','*');
    next();
});

app.use('/users',users);
app.use('/retailers',retailers);
app.use('/consumers',consumers);
app.use('/placeorders',placeorders);
app.use('/ors',ors);



app.listen(port,function()
    {
        console.log(`Server is listening on ${port}`);
    }
);
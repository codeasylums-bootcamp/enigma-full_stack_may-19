var use=localStorage.getItem("un");
var ar=new Array();
var odi=[]
function order(){
    axios.get(`http://localhost:3001/placeorders`)
    .then((response)=>{
        var size=response.data.length
        for(let i=size-1;i>=0;i--){
            odi[i]=response.data[i]._id;
        if(response.data[i].username==use){
            var siz=response.data[i].order.length
            
            for(let u=0;u<siz;u++){
                console.log(siz)
               document.getElementById('order').innerHTML+=
        `<div class="d${i}">
                     <li><span>${response.data[i].order[u][0]} --></span>
                        <span> ${response.data[i].order[u][2]}</span>
                        </li>
                        </div>`
       
     
            
        }}
        document.getElementById('order').innerHTML+=`
        
        <div id="d1${i}">
        <li> Address: ${response.data[i].address}</li>
               <li> Phone No: ${response.data[i].phone}</li>
               <li> Name: ${response.data[i].fname}</li>       
        <input type="button" class="btn btn-success" id="app${i}"  name="${response.data[i].fname}" value="Approve Order" onclick="approve(${i})"> 
        <input type="button" class="btn btn-danger" id="rej${i}" name="${response.data[i].fname}" value="Reject Order" onclick="reject(${i})">
        </div> 

        `
    

    }
    console.log(ar)
})
        
    

    .catch((err) => {
       console.log(err)
    })
}

function approve(p){
    var val=document.getElementById(`app${p}`).name
    axios.post('http://localhost:3001/ors',{
        funame: val,
        cf: "Approved",
        rname: use
    })
    .then((response)=>{

        console.log(response);
    })
    .catch((error)=>{

        console.log(error);
    })
    console.log(p)
    var x=document.getElementsByClassName(`d${p}`);
    for(let b=0;b<x.length;b++)
        x[b].innerHTML='';
    document.getElementById(`d1${p}`).innerHTML='';
    console.log(odi[p]);
    del(odi[p]);
    
    
    
}

function reject(p)
{   
    
    var val=document.getElementById(`rej${p}`).name
    axios.post('http://localhost:3001/ors',{
        funame: val,
        cf: "Rejected",
        rname: use
    })
    .then((response)=>{

        console.log(response);
    })
    .catch((error)=>{

        console.log(error);
    })
    var x=document.getElementsByClassName(`d${p}`);
    for(let b=0;b<x.length;b++)
        x[b].innerHTML='';
    document.getElementById(`d1${p}`).innerHTML='';
    del(odi[p]);
}

function del(orderID)
{
    axios.delete(`http://localhost:3001/placeorders/${orderID}`)
    .then(res=>{
        console.log(res)

    })
    .catch(err=>{
        console.log(err)
    })
}



// `
//                `

{/**/}
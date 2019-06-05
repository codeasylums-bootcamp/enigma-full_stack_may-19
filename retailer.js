var arr=[];
var name=localStorage.getItem("un");
function add(){
    document.getElementById('retailer').innerHTML+=`<li  >Product: ${document.getElementById('item').value}    Price: Rs.${document.getElementById('price').value} </li>`
    var item=document.getElementById('item').value;
    var price=document.getElementById('price').value;
    arr.push([item,price])
    
    
    
    
    
    document.getElementById('item').value=''
    document.getElementById('price').value=''
   

}
function final(){
    axios.post('http://localhost:3001/retailers',{
        
        menu: arr,
        username: name
    })
    .then((response)=>{

        console.log(response);
    })
    .catch((error)=>{

        console.log(error);
    })
    
}
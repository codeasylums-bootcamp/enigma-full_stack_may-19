var arr=[];
var name=localStorage.getItem("un");
function add(){
    document.getElementById('retailer').innerHTML+=`<li style="margin: 25px; width:300px; border:1px solid black; border-radius:5px;" class="list-group-item list-group-item-success" >${document.getElementById('item').value}  Rs. ${document.getElementById('price').value} </li>`
    var item=document.getElementById('item').value;
    var price=document.getElementById('price').value;
    arr.push([item,price])
    
    
    
    
    
    document.getElementById('item').value=''
    document.getElementById('price').value=''
   

}
function final(){
    alert("List updated successfully");
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
    document.getElementById('retailer').innerHTML=''
}





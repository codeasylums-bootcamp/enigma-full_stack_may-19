var usernam=localStorage.getItem("usn");
var use=localStorage.getItem("un");
var ord=[];
var k;
var ar=[];
var size;
var siz;
var ka=0;
function fn(){
    axios.get(`http://localhost:3001/retailers`)
    .then((response)=>{
         siz=response.data.length
        for(let i=0;i<siz;i++){
            if(usernam==response.data[i].username)
            {   k=i;
                size=response.data[i].menu.length
                for(let j=0;j<size;j++)
               { document.getElementById('order').innerHTML+=`
                
               <input type="checkbox"  autocomplete="off" id="c${ka}">
               <span>Item :${response.data[i].menu[j][0]}</span>
               <span>Price: Rs. ${response.data[i].menu[j][1]}</span>
               <span> Quantity: <input type="number" placeholder="" value=0 style=" width:5%;padding: 12px 20px;margin: 8px 0;box-sizing: border-box; "id="p${ka}"></span><br>`
            
                ar.push([response.data[i].menu[j][0],response.data[i].menu[j][1]])
                ka++;
            }}

        } 
       
        
    
    })
    .catch((err) => {
       console.log(err)
    })
    

   
}


function confirm(){

    for(let q=0;q<ka;q++){
        
        if(document.getElementById(`c${q}`).checked){
            var item=ar[q][0]
            var price=ar[q][1]
            var quantity=document.getElementById(`p${q}`).value
            ord.push([item,price,quantity])
            
        }
    }

   
    

    axios.post('http://localhost:3001/placeorders',{
        username: usernam,
        order: ord,
        address: document.getElementById('add').value,
        phone: document.getElementById('num').value,
        fname: use
        
    })
    .then((response)=>{

        console.log(response);
        for(let q=0;q<ka;q++){
        
            document.getElementById(`c${q}`).checked=false
                
                document.getElementById(`p${q}`).value=""
                document.getElementById('add').value=""
                document.getElementById('num').value=""
                
                
            
        }
    })
    .catch((error)=>{

        console.log(error);
    })

}



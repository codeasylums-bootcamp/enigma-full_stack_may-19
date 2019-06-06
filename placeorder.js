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
              
               <table style="width:100%; margin-left: 10%; background-color: aqua">   
            <tr style="border: 1px solid white; ">
            <th ></th>
             <th style="border: 1px solid white;">Name of Item</th>
                <th style="border: 1px solid white;">Price of Item</th> 
                <th style="border: 1px solid white;">Quantity</th>
                
            </tr>
            <tr style="border: 1px solid white; ">
            <td style="border: 1px solid white; "> <div class="col-lg-2"><input type="checkbox"  autocomplete="off" id="c${ka}"></div></td>
                <td style="border: 1px solid white;">${response.data[i].menu[j][0]}</td>
                <td style="border: 1px solid white;">${response.data[i].menu[j][1]}</td>
                <td style="border: 1px solid white;"><input type="number" placeholder="" value=0 style=" width:100%;padding: 12px 20px;margin: 8px 0;box-sizing: border-box; "id="p${ka}"></td>
               
            </tr>
               `
                
               
                ar.push([response.data[i].menu[j][0],response.data[i].menu[j][1]])
                ka++;
            }}

        } 
        console.log(p0)
        
    
    })
    .catch((err) => {
       console.log(err)
    })
    

   
}


function confirm(){
    alert("Order placed successfully");
    for(let q=0;q<ka;q++){
        console.log(document.getElementById(`p${0}`).value)
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


// <div class="col-lg-2"><input type="checkbox"  autocomplete="off" id="c${ka}"></div>
//                <div class="col-lg-6">Item :${response.data[i].menu[j][0]}</div>
//                <div class="col-lg-6"><span>Price: Rs. ${response.data[i].menu[j][1]}</span></div>
//                <div class="col-lg-6"><span style="margin-right:0%"> Quantity: <input type="number" placeholder="" value=0 style=" width:5%;padding: 12px 20px;margin: 8px 0;box-sizing: border-box; id="p${ka}"></span></div><br>`
            
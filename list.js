var use=localStorage.getItem("un");

function list(){
    axios.get(`http://localhost:3001/retailers`)
    .then((response)=>{
        console.log(response)
        console.log(use)
        
       var size=response.data.length
       for(let i=0;i<size;i++)
       {    console.log(response.data[i].username)
           if(response.data[i].username==use){
               var sizee=response.data[i].menu.length
               for(let j=0;j<sizee;j++){
                   document.getElementById('list').innerHTML+=`
                   <li><span> Product: ${response.data[i].menu[j][0]}</span>
                   <span>Price: Rs. ${response.data[i].menu[j][1]}</span>
                   </li>
                   `
               }
           }
       }
    
    
    })
        
    

    .catch((err) => {
       console.log(err)
    })


}


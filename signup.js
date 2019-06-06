

function fun(){

    var rate_value;

    if (document.getElementById('option1').checked) {
        rate_value = document.getElementById('option1').value;
      }
      else{
        rate_value = document.getElementById('option2').value;
      }
      console.log(rate_value);
    
    axios.post('http://localhost:3001/users',{
        username:document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        cpassword: document.getElementById('cpass').value,
        
        name:document.getElementById('name').value,
        usertype: rate_value
    })
    .then((response)=>{

        console.log("stop");
    })
    .catch((error)=>{

        console.log(error);
    })
}

function funt(){
    

    var pass=document.getElementById('pass1').value;
        var usern=document.getElementById('usern').value;
    axios.get(`http://localhost:3001/users/${usern}`)
    .then((response)=>{
        console.log("stop")
        
        
        
        if(response.data[0].password==pass && response.data[0].username==usern)
        {
            localStorage.setItem("un",response.data[0].username);
            if(response.data[0].usertype=="Retailer")
            {window.open('retailer.html');}
            else {window.open('consumer.html')}
            
        }
        else {alert("Invalid username or password")}
       
    })

    .catch((err) => {
       console.log(err)
    })}
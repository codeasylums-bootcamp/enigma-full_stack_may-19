

function fun(){
    

    var pass=document.getElementById('pass').value;
        var usern=document.getElementById('usern').value;
    axios.get(`http://localhost:3001/users/${usern}`)
    .then((response)=>{
        console.log(response)
        
        
        
        if(response.data[0].password==pass && response.data[0].username==usern)
        {
            localStorage.setItem("un",response.data[0].username);
            window.open('loggedin.html');
            
        }
    })

    .catch((err) => {
       console.log(err)
    })


}
function func(){
    window.open('signup.html');
}
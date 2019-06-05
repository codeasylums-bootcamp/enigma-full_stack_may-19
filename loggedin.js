var name=localStorage.getItem("un");
function funn(){

    
axios.get(`http://localhost:3001/users/${name}`)
    .then((response)=>{
        
        document.getElementById('carding').innerHTML=`
        <div id="cardss">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="logo.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">User Profile</h5>
            <p class="card-text" id="des"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" id="userna">Username:</li>
            <li class="list-group-item" id="namef">Name:</li>
            <li class="list-group-item" id="gender">Gender:</li>
            <li class="list-group-item" id="age">Age:</li>
          </ul>
         </div>`
        
        console.log(response)
        
        document.getElementById('userna').innerText="Username: " + response.data[0].username;
        document.getElementById('namef').innerText="Full Name: " + response.data[0].name;
        document.getElementById('age').innerText="Age: " + response.data[0].age;
        document.getElementById('gender').innerText="Gender: " + response.data[0].gender;
    })

    .catch((err) => {
       console.log(err)
    })}


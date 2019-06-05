var i=0;
var gen;
var name=localStorage.getItem("un");
axios.get(`http://localhost:3001/users/${name}`)
    .then((response)=>{
       gen=response.data[0].gender; 
       
    })

    .catch((err) => {
       console.log(err)
    })
function funct(){
    
axios.get(`http://localhost:3001/users`)
.then((response)=>{
    console.log(response)
    
    
    sizee=response.data.length
    console.log(sizee)
    if(i<sizee){
    if(response.data[i].gender!=gen)
    {
        document.getElementById('userna').innerText="Username: " + response.data[i].username;
        document.getElementById('namef').innerText="Full Name: " + response.data[i].name;
        document.getElementById('age').innerText="Age: " + response.data[i].age;
        document.getElementById('gender').innerText="Gender: " + response.data[i].gender;
        i++;    
}

    

    else {i++;
        funct();    }}
    else {
            document.getElementById('cardss').innerHTML=`<h1> No more users to match available currently</h1>`
         }


})

.catch((err) => {
   console.log(err)
})

}
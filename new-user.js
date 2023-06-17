document.getElementById('form').addEventListener('submit' , async function(event){
    event.preventDefault();
    
    let   firstName =document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let age=document.getElementById('age').value;
    
    let data={
        firstName:firstName,
        lastName:lastname,
        age:age,
    };
    console.log({data});
    
    
      let result = await  fetch('https://dummyjson.com/users/add',{
        method:'POST',
        headers:{
            'content-Type':'applications/json'
        },
        body:JSON.stringify(data)
     })
     .then(response=>response.json())
     .then(response=>response)
     .catch(error=>error.message)
     console.log({result})
    let success = document.getElementById('success');
    result.id ?success.innerHTML ='User added  successfully': success.innerHTML='User no added'
    })

 


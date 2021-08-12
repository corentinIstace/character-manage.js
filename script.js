
  
  
  
  
  
  const fileInput = document.querySelector("input");
  const saveChangeBtn = document.getElementById('save')
   var x = ""

  fileInput.addEventListener("change",  (e) => {
  
    
    const file = e.target.files[0];
    console.log(file)
    const reader = new FileReader();
   
    
    reader.onloadend = () => {
    
   
    
    
    const base64String = reader.result
      .replace("data:", "")
      .replace(/^.+,/, "");
      // Put the url into the img atribute 
      blah.src = reader.result
      
       document.getElementById('test').innerHTML = `${base64String}` ;
      
    
      
    };
    reader.readAsDataURL(file);
    
   
  });

  saveChangeBtn.addEventListener("click", async () => {
     if (document.getElementById('test').innerHTML == ""  ||  document.getElementById('name').value == "" ||   document.getElementById('shortDescription').value == "" || document.getElementById('description').value == "") {
      let heroName = document.getElementById('name').value
      let heroShortDesc = document.getElementById('shortDescription').value
      let heroDesc=document.getElementById('description').value
      let img = document.getElementById('test').innerHTML 
      
     
     }
     else {
         console.log("non") 
         
         let heroName = document.getElementById('name').value
         let heroShortDesc = document.getElementById('shortDescription').value
         let heroDesc=document.getElementById('description').value
         let img = document.getElementById('test').innerHTML 
      
                          
            const data = { heroDesc:`${heroDesc}`, shortDescription :`${heroShortDesc}`   ,name:`${heroName}` ,   image : `${img}` };
            console.log(data) 
            let response = await fetch("https://character-database.becode.xyz/characters",{ 
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                });
            let jsonans = await  response.json();  
            console.log(jsonans) 
     }
  })

  


  













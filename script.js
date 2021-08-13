
  
  
  
  
  
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
     if (document.getElementById('test').innerHTML == ""  ||  document.getElementById('name').value == "" ||   document.getElementById('shortDescription').value == "" || document.getElementById('editor-container').innerHTML == "") {
      let heroName = document.getElementById('name').value
      let heroShortDesc = document.getElementById('shortDescription').value
      let heroDesc=document.getElementById('editor-container').innerHTML
      let img = document.getElementById('test').innerHTML 
      
     
     }
     else {
         console.log("non") 
         
         let heroName = document.getElementById('name').value
         let heroShortDesc = document.getElementById('shortDescription').value
         let heroDesc=document.getElementById('editor-container').innerHTML
         let img = document.getElementById('test').innerHTML 
      
                          
            const data = { description:`${heroDesc}`, shortDescription :`${heroShortDesc}`   ,name:`${heroName}` ,   image : `${img}` };
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


  document.getElementById("delete").addEventListener("click",()=> {
    fileInput.value ="";
    blah.src ="#"
    document.getElementById('name').value = "" 
    document.getElementById('shortDescription').value = "" 
    document.getElementById('editor-container').innerHTML = ""

  } )

  


  /*

  saveChangeBtn.addEventListener("click", async() => {
       
    fetch(`https://character-database.becode.xyz/characters?name=jeremie`, {
        method: 'DELETE',
      })
      .then(res => console.log(res.json())) 
      .then(res => console.log(res))  
    

    })*/

    
   

    var quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          ['bold', 'italic'],
          ['link', 'blockquote', 'code-block', 'image'],
          [{ list: 'ordered' }, { list: 'bullet' }]
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });









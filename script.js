
  
  
  
  
  
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
     if (document.getElementById('test').innerHTML == ""  ||  document.getElementById('name').value == "" ||   document.getElementById('shortDescription').value == "" || document.querySelector(".ql-editor").innerHTML == "") {
      let heroName = document.getElementById('name').value
      let heroShortDesc = document.getElementById('shortDescription').value
      let heroDesc=document.querySelector(".ql-editor").innerHTML
      let img = document.getElementById('test').innerHTML 
      
     
     }
     else {
         console.log("non") 
         
         let heroName = document.getElementById('name').value
         let heroShortDesc = document.getElementById('shortDescription').value
         let heroDesc=document.querySelector(".ql-editor").innerHTML
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
    document.querySelector(".ql-editor").innerHTML = ""

  } )

  
const countName =  ()=> {
  
  let nameval = document.getElementById('name').value
 
  console.log(nameval)

  
  contentLen.innerHTML = `${nameval.length} on max 20 char`; 
 
}

const countSDesc =  ()=> {
  
  let shortde = document.getElementById('shortDescription').value 
  console.log(shortde)
  shortdesctLen.innerHTML = `${shortde.length} on max 70 char`;
 
}

const countDesc =  ()=> {
  
  let de = document.querySelector(".ql-editor").innerText 
  
  console.log(de)
  desctLen.innerHTML = `${de.length} on max 350 char`;
}

 var quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          ['bold', 'italic','strike'],
          [ 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ align: '' }  , { align: 'center' } , { align: 'right' }   ],
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });



document.getElementById('name').addEventListener("input",countName)
document.getElementById('shortDescription').addEventListener("input",countSDesc)
document.querySelectorAll(".ql-editor")[0].addEventListener("input",countDesc)








  /*

  saveChangeBtn.addEventListener("click", async() => {
       
    fetch(`https://character-database.becode.xyz/characters?name=jeremie`, {
        method: 'DELETE',
      })
      .then(res => console.log(res.json())) 
      .then(res => console.log(res))  
    

    })*/

    
   

   








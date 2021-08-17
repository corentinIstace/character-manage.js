( async () => {
    
    // CHARACTER'S TEMPLATE //
    
    const response = await fetch("https://character-database.becode.xyz/characters");
    const characters = await response.json();


    // console.log(characters);
    await characters.forEach((character) => {
        
        let template = document.getElementById("tpl-character");
        let target = document.getElementById("target");
        let clone = template.content.cloneNode(true);
        
        
        clone.querySelector("#character-img").src = `data:image/JPEG;base64,${character.image}`;
        clone.querySelector("#character-name").innerHTML = character.name;
        clone.querySelector("#character-shortDescription").innerHTML = character.shortDescription;
        clone.querySelector("#character-description").innerHTML = character.description;
        clone.querySelector("#character-id").innerHTML = character.id;
        
        target.appendChild(clone);
       
    });


    function addEventListenerList(list, event, fn) {
      for (var i = 0, len = list.length; i < len; i++) {
          list[i].addEventListener(event, fn, false);
      }
  }
  

  

  // character button 
  var ar_coins = document.querySelectorAll("#character-button");
  addEventListenerList(ar_coins, 'click', async  (e) => {

    // delete all displayed card 
    for (var i = 0, len = document.querySelectorAll("#character-button").length; i < len; i++) {
      document.querySelectorAll("#character-button")[i].parentNode.style.display ="none" 
    }
    document.getElementById("main-adding").style.display ="none"
    document.getElementById("search").style.display ="none"
      let kik = e.currentTarget.parentNode ; 
      let id = kik.children[4].innerHTML
     console.log(id)
     let response = await fetch(`https://character-database.becode.xyz/characters/${id}`);
     let character = await response.json();
     document.querySelector(".single-page").style.display ="flex"
     bla.src = `data:image/JPEG;base64,${character.image}`;
     document.querySelector(".card__title").innerHTML = `${character.name}`;
     document.querySelector(".card__subtitle").innerHTML = `${character.shortDescription}`;
     document.querySelector(".card__copy").innerHTML = `${character.description}`;
     document.getElementById("tester").innerHTML = id ;
     document.getElementById("delete-single").addEventListener("click",  async ()=> {

    console.log("delete-single") 
           
   

   let id = document.getElementById("tester").innerHTML
                     
       
       let response = await fetch(`https://character-database.becode.xyz/characters/${id}`,{ 
           method: 'DELETE',
           headers: {
               'Content-Type': 'application/json',
           },
           
           });
       let jsonans = await  response.json();  
       console.log(jsonans) 
       location.reload();    
  
  } )

    document.getElementById("udapte").addEventListener("click",() => {
      document.querySelector(".single-page").style.display ="none";
      console.log(character.name, character.description, `data:image/JPEG;base64,${character.image}` ,character.shortDescription)
      document.getElementById("card").style.display ="flex"
      blah.src = `data:image/JPEG;base64,${character.image}`;
      document.getElementById("name").value = `${character.name}`;
      shortDescription.value = `${character.shortDescription}`;
      document.querySelector(".ql-editor").innerHTML =`${character.description}`;
      document.querySelector("input").value = character.image;
      document.getElementById("tester").innerHTML  = id;
      put () 
      deleted ()
    })
   


    
  }); 


  
   
  
       






    // SEARCH BAR //
    
    search.addEventListener("keyup", function() {
    const search = document.getElementById("search");
    const input = search.value;
    
    let names =[]
    characters.forEach(character =>{
    names.push(character.name) 
    });
    // console.log(names)
    // creer un tableau et y inclure tous les noms des characters présent dans l'API du même nom
    let result = names.filter((name) => {
        return name.includes(input)
    });
    console.log(result);
    // filtre les noms du tableau creer ci-dessus afin de ne retourner que les noms comportant le ou les carractères
    // rentrés par l'utilisateur dans l'input
    let suggestion = "";
    if (input != ""){
    result.forEach(resultName=> 
    suggestion += `<div id ="suggestion">${resultName}</div>`
    )};
    document.getElementById("suggestion").innerHTML = suggestion;
    // si l'utilisateur écrit dans l'input, il aura des propositions de characters ayant dans leur nom les 
    // carractères qu'il aura tapé, celles-ci seront écrites dans l'élément html "suggestion"
    if (input != ""){
        const displayCharacters = (characters) => {
            console.log(characters);
            let show =characters.map((characters) =>{
                return characters; 
            })
            document.getElementById("target").innerHTML = show;
        }
        displayCharacters(result);
    }
    
    });
    
    
})();
// SINGLE CHARACTER // 







// udapte 
  

const fileInput = document.getElementById('imgInp');
console.log(fileInput)
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
      console.log("ok")
       document.getElementById('test').innerHTML = `${base64String}` ;
      
    
      
    };
    reader.readAsDataURL(file);
    
   
  });
  // save change button paramaters put method 
  function put () {

    saveChangeBtn.addEventListener("click", async () => {
      
         
           console.log("put") 
           
           let heroName = document.getElementById('name').value
           let heroShortDesc = document.getElementById('shortDescription').value
           let heroDesc=document.querySelector(".ql-editor").innerHTML
           let img = blah.src .replace("data:", "")
           .replace(/^.+,/, "");

          let id = document.getElementById("tester").innerHTML
                            
              const data = { description:`${heroDesc}`, shortDescription :`${heroShortDesc}`   ,name:`${heroName}` ,   image : `${img}` };
              console.log(data) 
              let response = await fetch(`https://character-database.becode.xyz/characters/${id}`,{ 
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                  });
              let jsonans = await  response.json();  
              console.log(jsonans) 
              location.reload();
       
    })
    
    
    
    }
    

  // save change button paramaters post method 


function post () {

saveChangeBtn.addEventListener("click", async () => {
   if (document.getElementById('test').innerHTML == ""  ||  document.getElementById('name').value == "" ||   document.getElementById('shortDescription').value == "" || document.querySelector(".ql-editor").innerHTML == "") {
    let heroName = document.getElementById('name').value
    let heroShortDesc = document.getElementById('shortDescription').value
    let heroDesc=document.querySelector(".ql-editor").innerHTML
    let img = document.getElementById('test').innerHTML 
    
   console.log('recommence')
   }
   else {
     
       console.log("non") 
       
       let heroName = document.getElementById('name').value
       let heroShortDesc = document.getElementById('shortDescription').value
       let heroDesc=document.querySelector(".ql-editor").innerHTML
       let img = document.getElementById('test').innerHTML 
      let id = document.getElementById("tester").innerHTML
                        
          const data = { description:`${heroDesc}`, shortDescription :`${heroShortDesc}`   ,name:`${heroName}` ,   image : `${img}` };
          console.log(data) 
          let response = await fetch(`https://character-database.becode.xyz/characters`,{ 
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
              });
          let jsonans = await  response.json();  
          console.log(jsonans) 
          location.reload();
   }
})



}
// delete single character

 






// delete a character

function deleted () {
  document.getElementById("delete").addEventListener("click",async ()=> {

    console.log("delete") 
           
    let heroName = document.getElementById('name').value
    let heroShortDesc = document.getElementById('shortDescription').value
    let heroDesc=document.querySelector(".ql-editor").innerHTML
    let img = blah.src .replace("data:", "")
    .replace(/^.+,/, "");

   let id = document.getElementById("tester").innerHTML
                     
       const data = { description:`${heroDesc}`, shortDescription :`${heroShortDesc}`   ,name:`${heroName}` ,   image : `${img}` };
       console.log(data) 
       let response = await fetch(`https://character-database.becode.xyz/characters/${id}`,{ 
           method: 'DELETE',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
           });
       let jsonans = await  response.json();  
       console.log(jsonans) 
       location.reload();    
  
  } )

}

//  reinitialise a character 

function clear () {
  document.getElementById("delete").addEventListener("click",()=> {

  
  fileInput.value ="";
  blah.src ="#"
  document.getElementById('name').value = "" 
  document.getElementById('shortDescription').value = "" 
  document.querySelector(".ql-editor").innerHTML = ""
  document.getElementById("card").style.display ="none"
  location.reload();


} )
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





document.getElementById('name').addEventListener("input",countName)
document.getElementById('shortDescription').addEventListener("input",countSDesc)
document.querySelectorAll(".ql-editor")[0].addEventListener("input",countDesc)




// add new charactere 


document.getElementById("main-adding").addEventListener("click" ,() => {
  document.getElementById("card").style.display ="flex"
  for (var i = 0, len = document.querySelectorAll("#character-button").length; i < len; i++) {
    document.querySelectorAll("#character-button")[i].parentNode.style.display ="none" 
  }
  document.getElementById("main-adding").style.display ="none"
  document.getElementById("search").style.display ="none"
  post ()
  clear() 

})




  

 










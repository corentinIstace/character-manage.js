( async () => {
    
// --------------------------------- CHARACTER template -------------------------------------- //
  
  const response = await fetch("https://character-database.becode.xyz/characters");
  const characters = await response.json();
  // console.log(characters);
  characters.forEach((character) => { 
    var showCharacter = () => {
      let template = document.getElementById("tpl-character");
      let target = document.getElementById("target");
      let clone = template.content.cloneNode(true);
      
      
      clone.querySelector("#character-img").src = `data:image/JPEG;base64,${character.image}`;
      clone.querySelector("#character-name").innerHTML = character.name;
      clone.querySelector("#character-shortDescription").innerHTML = character.shortDescription;
      clone.querySelector("#character-id").innerHTML = character.id;
      
      target.appendChild(clone); 
    }  
    showCharacter()
  });

// --------------------------------- CHARACTER BUTTONS -------------------------------------- //
  function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
  };

  var butArray = document.querySelectorAll("#character-button");
  addEventListenerList(butArray, 'click', async  (e) => {

// --------------------------------- MASK ALL CARDS -------------------------------------- //

  for (let i = 0, len = document.querySelectorAll("#character-button").length; i < len; i++) {
    document.querySelectorAll("#character-button")[i].parentNode.style.display ="none" 
  };
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
    // console.log("delete-single")        
    let id = document.getElementById("tester").innerHTML
    let response = await fetch(`https://character-database.becode.xyz/characters/${id}`,{ 
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
    });
    let jsonResp = await response.json();  
    console.log(jsonResp) 
    location.reload();    
  });

  document.getElementById("udapte").addEventListener("click",() => {
    var updateCharacter = () =>{
      document.querySelector(".single-page").style.display ="none";
      console.log(character.name, character.description, `data:image/JPEG;base64,${character.image}` ,character.shortDescription)
      document.getElementById("card").style.display ="flex"
      blah.src = `data:image/JPEG;base64,${character.image}`;
      document.getElementById("name").value = `${character.name}`;
      shortDescription.value = `${character.shortDescription}`;
      document.querySelector(".ql-editor").innerHTML =`${character.description}`;
      document.querySelector("input").value = character.image;
      document.getElementById("tester").innerHTML  = id;
      };
    updateCharacter()
    put () 
    deleted ()
  })  
}); 

// --------------------------------- SEARCH BAR -------------------------------------- //
  
  search.addEventListener("keyup", function() {
    target.innerHTML = "";
    const search = document.getElementById("search");
    const input = search.value;

    let result = characters.filter((character) => {
        return character.name.includes(input)
    });
    // console.log(result);
    // filtre les noms du tableau creer ci-dessus afin de ne retourner que les noms comportant le ou les carractères
    // rentrés par l'utilisateur dans l'input

    // let suggestion = "";
    // if (input != ""){
    //     result.forEach(resultName=> {   
    //         suggestion += `<div id ="suggestion">${resultName.name}</div>`
    //     });
    // };
    // document.getElementById("suggestion").innerHTML = suggestion;
      // si l'utilisateur écrit dans l'input, il aura des propositions de characters ayant dans leur nom les 
      // carractères qu'il aura tapé, celles-ci seront écrites dans l'élément html "suggestion"

      // console.log(characters);
      result.forEach((result) =>{             
        const displayResult = () => {
          let template = document.getElementById('tpl-character')
          let templateClone = template.content.cloneNode(true);
       
          templateClone.getElementById("character-img").src = `data:image/JPEG;base64,${result.image}`;
          templateClone.getElementById("character-name").innerHTML = result.name;
          templateClone.getElementById("character-shortDescription").innerHTML = result.shortDescription;
          templateClone.getElementById("character-description").innerHTML = result.description;
          target.append(templateClone);
      };
      displayResult()
    });   
  });
 
})();

// --------------------------------- UPDATE -------------------------------------- //


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
      // console.log("ok")
      document.getElementById('test').innerHTML = `${base64String}` ;   
  };
  reader.readAsDataURL(file);
 
});
// --------------------------------- SAVE CHANGE BUTTON PUT METHOD -------------------------------------- //

function put () {

  saveChangeBtn.addEventListener("click", async () => {
    
       
         console.log("put") 
         
         let heroName = document.getElementById('name').value
         let heroShortDesc = document.getElementById('shortDescription').value
         let heroDesc=document.querySelector(".ql-editor").innerHTML
         let img = blah.src .replace("data:", "")
         .replace(/^.+,/, "");

        let id = document.getElementById("tester").innerHTML
                          
            const data = {description:`${heroDesc}`, shortDescription:`${heroShortDesc}`, name:`${heroName}`, image :`${img}`};
            // console.log(data) 
            let response = await fetch(`https://character-database.becode.xyz/characters/${id}`,{ 
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                });
            let jsonResp = await response.json();  
            console.log(jsonResp) 
            location.reload();   
  });
};
  
// --------------------------------- SAVE CHANGE BUTTON POST METHOD -------------------------------------- //

function post () {

  saveChangeBtn.addEventListener("click", async () => {
    let heroName = document.getElementById('name').value
    let heroShortDesc = document.getElementById('shortDescription').value
    let heroDesc=document.querySelector(".ql-editor").innerHTML
    let img = document.getElementById('test').innerHTML 

    if (heroName.innerHTML == ""  ||  heroShortDesc.value == "" || heroDesc.value == "" || img.innerHTML == "") {
  
      console.log('recommence')
    }
    else {
   
    //  console.log("non") 
     let heroName = document.getElementById('name').value
     let heroShortDesc = document.getElementById('shortDescription').value
     let heroDesc=document.querySelector(".ql-editor").innerHTML
     let img = document.getElementById('test').innerHTML 
                      
        const data = { description:`${heroDesc}`, shortDescription :`${heroShortDesc}`   ,name:`${heroName}` ,   image : `${img}` };
        console.log(data) 
        let response = await fetch(`https://character-database.becode.xyz/characters`,{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            });
        let jsonResp = await  response.json();  
        console.log(jsonResp) 
        location.reload();
 }
  })
};

// --------------------------------- DELETED CHARACTER -------------------------------------- //

function deleted () {
  document.getElementById("delete").addEventListener("click",async ()=> {
    // console.log("delete") 
         
    let heroName = document.getElementById('name').value
    let heroShortDesc = document.getElementById('shortDescription').value
    let heroDesc=document.querySelector(".ql-editor").innerHTML
    let img = blah.src .replace("data:", "")
    .replace(/^.+,/, "");
    let id = document.getElementById("tester").innerHTML
                   
    const data = { description:`${heroDesc}`, shortDescription:`${heroShortDesc}`, name:`${heroName}`, image:`${img}`};
    //  console.log(data) 
    let response = await fetch(`https://character-database.becode.xyz/characters/${id}`,{ 
        method: 'DELETE',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    let jsonResp = await response.json();  
     console.log(jsonResp) 
    location.reload();    
  });
};

// --------------------------------- REINISIALISATION OF CHARACTER -------------------------------------- //
 
function clear () {
  document.getElementById("delete").addEventListener("click",()=> {

    fileInput.value ="";
    blah.src ="#"
    document.getElementById('name').value = "" 
    document.getElementById('shortDescription').value = "" 
    document.querySelector(".ql-editor").innerHTML = ""
    document.getElementById("card").style.display ="none"
    location.reload();
  })
};

// --------------------------------- MARKDOW BAR -------------------------------------- //

var markdowBar = new Quill('#editor-container', {
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

  let nameval = document.getElementById('name').value;
    // console.log(nameval)
  contentLen.innerHTML = `${nameval.length} on max 20 char`; 
}

const countDescription =  ()=> {

  let shortDescription = document.getElementById('shortDescription').value 
    // console.log(shortDescription)
  shortdesctLen.innerHTML = `${shortDescription.length} on max 70 char`;

  let description = document.querySelector(".ql-editor").innerText 
    // console.log(description)
  desctLen.innerHTML = `${description.length} on max 350 char`;
}

document.getElementById('name').addEventListener("input",countName);
document.getElementById('shortDescription').addEventListener("input",countDescription);
document.querySelectorAll(".ql-editor")[0].addEventListener("input",countDescription);


// --------------------------------- ADDING NEW CHARACTER -------------------------------------- //

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

// --------------------------------- WINDOW LOADER -------------------------------------- //

function loadPage () {
  let load = document.getElementById("loader");
    load.style.display ="none";
};